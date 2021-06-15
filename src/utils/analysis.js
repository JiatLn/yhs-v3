import { countBy, merge } from 'lodash';

import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { calcPoint } from '@/utils/parseJson.js';
import { format45 } from './format.js';

export function getSuitPosCountByScore(suitName, calcType, rankNum) {
  const { getEqData } = useYuhunStore();
  let onlySpeed = calcType.length === 1 && calcType[0] === 'S';

  let res = countBy(
    getEqData.value
      .filter((eq) => eq.suitInfo.name === suitName)
      .map((item) => ({ ...item, point: calcPoint(item, calcType, onlySpeed) }))
      .filter((eq) => eq.point >= rankNum),
    (item) => item.pos,
  );
  res = merge({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, res);
  return Object.values(res);
}

// 计算御魂各个维度的分数（100分制）
// https://bbs.nga.cn/read.php?&tid=15467806&pid=303809446&to=1
export function calcYuhunScore(eqData) {
  const getValue = (name) => {
    return eqData.rand_attr[name] || 0;
  };
  let score = [0, 0, 0, 0, 0, 0];
  // A输出项 = (速度/2.7+暴击/2.7+攻击加成/2.7+暴击伤害/3.6)*100/9
  score[0] =
    ((getValue('Speed') / 2.7 +
      (getValue('CritRate') * 100) / 2.7 +
      (getValue('AttackRate') * 100) / 2.7 +
      (getValue('CritPower') * 100) / 3.6) *
      100) /
    9;
  // F奶盾项 = (速度/2.7+暴击/2.7+生命加成/2.7+暴击伤害/3.6)*100/9
  score[1] =
    ((getValue('Speed') / 2.7 +
      (getValue('CritRate') * 100) / 2.7 +
      (getValue('HpRate') * 100) / 2.7 +
      (getValue('CritPower') * 100) / 3.6) *
      100) /
    9;
  // M速度命中 = (速度/2.7+命中/3.6)*100/7
  score[2] = ((getValue('Speed') / 2.7 + (getValue('EffectHitRate') * 100) / 3.6) * 100) / 7;
  // D速度抵抗 = (速度/2.7+命中/3.6)*100/7
  score[3] = ((getValue('Speed') / 2.7 + (getValue('EffectResistRate') * 100) / 3.6) * 100) / 7;
  // B双堆 = (速度/2.7+命中/3.6+抵抗/3.6)*100/8
  score[4] =
    ((getValue('Speed') / 2.7 +
      (getValue('EffectHitRate') * 100) / 3.6 +
      (getValue('EffectResistRate') * 100) / 3.6) *
      100) /
    8;
  // S纯速度项 = (速度/2.7)*100/6
  score[5] = ((getValue('Speed') / 2.7) * 100) / 6;
  return score.map((item) => format45(item, 2));
}

export function evaluationByScore(score) {
  const s = Math.max(...score);
  if (s >= 100) {
    return 'SSS';
  } else if (s >= 90) {
    return 'SS';
  } else if (s >= 80) {
    return 'S';
  } else if (s >= 70) {
    return 'A';
  } else if (s >= 60) {
    return 'B';
  } else if (s >= 50) {
    return 'C';
  } else {
    return 'N';
  }
}

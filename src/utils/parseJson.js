import { flatten } from 'lodash';

// 解析御魂json
import { info } from '@/data/yuhuninfo.js';

const parseYhJson = (json) => {
  const eqData = json.equip_data;
  let eqDataByPos = [[], [], [], [], [], []];
  eqData.forEach((eq, index) => {
    eq.suitInfo = info.filter((item) => item.id === eq.suit_id)[0];
    eqDataByPos[eq.pos - 1].push(eq);
  });
  delete json.equip_data;
  return { ...json, eqData, eqDataByPos };
};

// A输出项 、F奶盾项、M命中、D抵抗、B双堆、S纯速度项
const attrsDict = {
  A: ['CritPower', 'CritRate', 'AttackRate'],
  F: ['CritPower', 'CritRate', 'HpRate'],
  M: ['EffectHitRate'],
  D: ['EffectResistRate'],
  B: ['EffectResistRate', 'EffectHitRate'],
  S: ['Speed'],
};

const calcAttr = (attrName, attrVal) => {
  if (attrName !== 'Speed') {
    attrVal *= 100;
  }
  // 速度 暴击 生命 攻击
  if (['Speed', 'CritRate', 'HpRate', 'AttackRate'].includes(attrName)) {
    return Math.ceil(attrVal / 3);
  }
  // 命中、抵抗、爆伤
  return Math.ceil(attrVal / 4);
};

// 收益次数计算
const calcPoint = (eqData, type = ['A', 'S']) => {
  let point = 0;
  // 有效属性列表
  const goodAttr = [...new Set(flatten(type.map((item) => attrsDict[item])))];
  const randAttr = Object.entries(eqData.rand_attr);
  randAttr.forEach(([name, value]) => {
    if (goodAttr.includes(name)) {
      point += calcAttr(name, value);
    }
  });
  return point;
};

export { parseYhJson, calcPoint };

import { flatten } from 'lodash';

// 解析御魂json
import { yuhunInfo, attrDict } from '@/data/yuhuninfo.js';
import { calcYuhunScore } from '@/utils/analysis.js';

const parseYhJson = (json) => {
  const eqData = json.equip_data;
  let eqDataByPos = [[], [], [], [], [], []];
  eqData.forEach((eq, index) => {
    eq.suitInfo = yuhunInfo.filter((item) => item.id === eq.suit_id)[0];
    eqDataByPos[eq.pos - 1].push(eq);
  });
  Reflect.deleteProperty(json, 'equip_data');
  eqData.forEach((item) => {
    item.score = calcYuhunScore(item);
    item.baseAttr = attrDict[Object.keys(item.base_attr)[0]];
    Reflect.deleteProperty(item, 'suit_id');
  });
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
const calcPoint = (eqData, type = ['A', 'S'], onlySpeed = false) => {
  let point = 0;

  // 如果只考虑速度做为评分标准 则二号位主属性非速度的都视为0分（如防御17速）
  if (onlySpeed && eqData.pos === 2 && eqData.base_attr !== 'Speed') {
    return 0;
  }

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

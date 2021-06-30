import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import useCalcStore from '@/store/calc.js';

import { calcCombNum, hasIntersection } from './math';

const filterYuhunList = () => {
  const { getEqDataByPos } = useYuhunStore();
  const calcStore = useCalcStore();
  let yuhunList = getEqDataByPos.value;
  calcCombNum(yuhunList);
  // 过滤246主属性
  yuhunList = filterMainAttr(yuhunList, calcStore.mainAttrs);
  calcCombNum(yuhunList);
  // 过滤六星的/满级的
  yuhunList = filterSixOrFull(yuhunList, calcStore.onlySix, calcStore.onlyFull);
  calcCombNum(yuhunList);
  // 过滤不包含有效属性的御魂
  yuhunList = filterUseless(yuhunList, calcStore.getEffectiveAttrs);
  calcCombNum(yuhunList);
  // 根据套装过滤
  console.log(calcStore.getNotFreeAttrs);

  return yuhunList;
};

// 过滤246主属性
const filterMainAttr = (list, attrs) => {
  list[1] = list[1].filter((item) => attrs.pos2.includes(item.baseAttr));
  list[3] = list[3].filter((item) => attrs.pos4.includes(item.baseAttr));
  list[5] = list[5].filter((item) => attrs.pos6.includes(item.baseAttr));
  return list;
};

// 过滤六星的/满级的
const filterSixOrFull = (list, onlySix, onlyFull) => {
  if (!onlySix && !onlyFull) return list;
  if (onlySix) {
    list = list.map((items) => items.filter((item) => item.quality === 6));
  }
  if (onlyFull) {
    list = list.map((items) => items.filter((item) => item.level === 15));
  }
  return list;
};

// 过滤不包含有效属性的御魂
const filterUseless = (list, effectiveAttrs) => {
  list = list.map((items) =>
    items.filter((item) => hasIntersection(Object.keys(item.rand_attr), effectiveAttrs)),
  );
  return list;
};

// 过滤御魂属性较弱的御魂 不能比较[非自由]属性
// 比如 一号位 3攻击 8暴击 就不如一个 5攻击 8暴击的 此时把前者过滤掉
// [非自由]属性 定义:如果速度有上限 那3速度和5速度相比 都有可能是最佳属性 此时不能过滤掉前者

export { filterYuhunList };

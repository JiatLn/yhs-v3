import { reduce, map, intersection } from 'lodash';

// 计算组合数
const calcCombNum = (list) => {
  const count = reduce(
    map(list, (item) => item.length),
    (a, b) => a * b,
    1,
  );
  console.log('当前组合：', count);
  return count;
};

/**
 * 判断两个列表是否有交集
 *
 * @param {*} A array
 * @param {*} B array
 * @return {*} Boolean
 */
const hasIntersection = (A, B) => {
  return !!intersection(A, B).length;
};

export { calcCombNum, hasIntersection };
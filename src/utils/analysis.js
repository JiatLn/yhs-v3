import { countBy, merge } from 'lodash';

import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { calcPoint } from '@/utils/parseJson.js';

export function getSuitPosCountByScore(suitName, calcType, rankNum) {
  const { getEqData } = useYuhunStore();

  let res = countBy(
    getEqData.value
      .filter((eq) => eq.suitInfo.name === suitName)
      .map((item) => ({ ...item, point: calcPoint(item, calcType) }))
      .filter((eq) => eq.point >= rankNum),
    (item) => item.pos,
  );
  res = merge({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, res);
  return Object.values(res);
}

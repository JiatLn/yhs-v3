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

export { parseYhJson };

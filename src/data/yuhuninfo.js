import { groupBy } from 'lodash';

let yuhunInfo = [
  {
    name: '招财猫',
    id: 300010,
    type: '防御加成',
  },
  {
    name: '破势',
    id: 300030,
    type: '暴击',
  },
  {
    name: '针女',
    id: 300036,
    type: '暴击',
  },
  {
    name: '薙魂',
    id: 300021,
    type: '生命加成',
  },
  {
    name: '雪幽魂',
    id: 300002,
    type: '防御加成',
  },
  {
    name: '魅妖',
    id: 300035,
    type: '防御加成',
  },
  {
    name: '三味',
    id: 300007,
    type: '暴击',
  },
  {
    name: '狂骨',
    id: 300048,
    type: '攻击加成',
  },
  {
    name: '树妖',
    id: 300024,
    type: '生命加成',
  },
  {
    name: '涅槃之火',
    id: 300006,
    type: '生命加成',
  },
  {
    name: '网切',
    id: 300026,
    type: '暴击',
  },
  {
    name: '反枕',
    id: 300011,
    type: '防御加成',
  },
  {
    name: '日女巳时',
    id: 300013,
    type: '防御加成',
  },
  {
    name: '珍珠',
    id: 300032,
    type: '防御加成',
  },
  {
    name: '轮入道',
    id: 300012,
    type: '攻击加成',
  },
  {
    name: '蜃气楼',
    id: 300054,
    type: '首领御魂',
  },
  {
    name: '地藏像',
    id: 300003,
    type: '生命加成',
  },
  {
    name: '心眼',
    id: 300022,
    type: '攻击加成',
  },
  {
    name: '鸣屋',
    id: 300020,
    type: '攻击加成',
  },
  {
    name: '狰',
    id: 300018,
    type: '攻击加成',
  },
  {
    name: '荒骷髅',
    id: 300052,
    type: '首领御魂',
  },
  {
    name: '蚌精',
    id: 300034,
    type: '效果命中',
  },
  {
    name: '阴摩罗',
    id: 300027,
    type: '攻击加成',
  },
  {
    name: '鬼灵歌伎',
    id: 300077,
    type: '首领御魂',
  },
  {
    name: '钟灵',
    id: 300015,
    type: '生命加成',
  },
  {
    name: '伤魂鸟',
    id: 300029,
    type: '暴击',
  },
  {
    name: '木魅',
    id: 300023,
    type: '防御加成',
  },
  {
    name: '火灵',
    id: 300019,
    type: '效果命中',
  },
  {
    name: '土蜘蛛',
    id: 300050,
    type: '首领御魂',
  },
  {
    name: '镇墓兽',
    id: 300031,
    type: '暴击',
  },
  {
    name: '兵主部',
    id: 300074,
    type: '攻击加成',
  },
  {
    name: '镜姬',
    id: 300014,
    type: '生命加成',
  },
  {
    name: '地震鲶',
    id: 300053,
    type: '首领御魂',
  },
  {
    name: '魍魉之匣',
    id: 300008,
    type: '效果抵抗',
  },
  {
    name: '蝠翼',
    id: 300004,
    type: '攻击加成',
  },
  {
    name: '幽谷响',
    id: 300049,
    type: '效果抵抗',
  },
  {
    name: '胧车',
    id: 300051,
    type: '首领御魂',
  },
  {
    name: '返魂香',
    id: 300039,
    type: '效果抵抗',
  },
  {
    name: '青女房',
    id: 300075,
    type: '暴击',
  },
  {
    name: '骰子鬼',
    id: 300033,
    type: '效果抵抗',
  },
  {
    name: '飞缘魔',
    id: 300073,
    type: '效果命中',
  },
  {
    name: '被服',
    id: 300009,
    type: '生命加成',
  },
  {
    name: '涂佛',
    id: 300076,
    type: '生命加成',
  },
];

yuhunInfo = yuhunInfo.sort((a, b) => a.id - b.id);

const yuhunDict = groupBy(yuhunInfo, (item) => item.type);

const attrDict = {
  CritPower: '暴击伤害',
  Attack: '攻击',
  Speed: '速度',
  Hp: '生命',
  Defense: '防御',
  AttackRate: '攻击加成',
  CritRate: '暴击',
  HpRate: '生命加成',
  DefenseRate: '防御加成',
  EffectResistRate: '效果抵抗',
  EffectHitRate: '效果命中',
};

const yuhunOptions = Object.entries(yuhunDict).map(([key, value]) => ({
  label: key,
  children: value.map((item) => ({ label: item.name, value: item.name })),
  value: key,
}));

const twoSuitOptions = [
  {
    name: '暴击',
    id: 300010,
    type: '暴击',
  },
  {
    name: '攻击加成',
    id: 300010,
    type: '攻击加成',
  },
  {
    name: '首领御魂',
    id: 300010,
    type: '首领御魂',
  },
  {
    name: '效果命中',
    id: 300010,
    type: '效果命中',
  },
  {
    name: '效果抵抗',
    id: 300010,
    type: '效果抵抗',
  },
  {
    name: '生命加成',
    id: 300010,
    type: '生命加成',
  },
  {
    name: '防御加成',
    id: 300010,
    type: '防御加成',
  },
];

export { yuhunInfo, attrDict, yuhunDict, yuhunOptions, twoSuitOptions };

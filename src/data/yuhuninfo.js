import { groupBy } from 'lodash';

const info = [
  {
    name: '招财猫',
    id: 300010,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300010.png',
  },
  {
    name: '破势',
    id: 300030,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300030.png',
  },
  {
    name: '针女',
    id: 300036,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300036.png',
  },
  {
    name: '薙魂',
    id: 300021,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300021.png',
  },
  {
    name: '雪幽魂',
    id: 300002,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300002.png',
  },
  {
    name: '魅妖',
    id: 300035,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300035.png',
  },
  {
    name: '三味',
    id: 300007,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300007.png',
  },
  {
    name: '狂骨',
    id: 300048,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300048.png',
  },
  {
    name: '树妖',
    id: 300024,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300024.png',
  },
  {
    name: '涅槃之火',
    id: 300006,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300006.png',
  },
  {
    name: '网切',
    id: 300026,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300026.png',
  },
  {
    name: '反枕',
    id: 300011,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300011.png',
  },
  {
    name: '日女巳时',
    id: 300013,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300013.png',
  },
  {
    name: '珍珠',
    id: 300032,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300032.png',
  },
  {
    name: '轮入道',
    id: 300012,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300012.png',
  },
  {
    name: '蜃气楼',
    id: 300054,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300054.png',
  },
  {
    name: '地藏像',
    id: 300003,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300003.png',
  },
  {
    name: '心眼',
    id: 300022,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300022.png',
  },
  {
    name: '鸣屋',
    id: 300020,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300020.png',
  },
  {
    name: '狰',
    id: 300018,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300018.png',
  },
  {
    name: '荒骷髅',
    id: 300052,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300052.png',
  },
  {
    name: '蚌精',
    id: 300034,
    type: '效果命中',
    icon: '/src/assets/img/yuhun/300034.png',
  },
  {
    name: '阴摩罗',
    id: 300027,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300027.png',
  },
  {
    name: '鬼灵歌伎',
    id: 300077,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300077.png',
  },
  {
    name: '钟灵',
    id: 300015,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300015.png',
  },
  {
    name: '伤魂鸟',
    id: 300029,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300029.png',
  },
  {
    name: '木魅',
    id: 300023,
    type: '防御加成',
    icon: '/src/assets/img/yuhun/300023.png',
  },
  {
    name: '火灵',
    id: 300019,
    type: '效果命中',
    icon: '/src/assets/img/yuhun/300019.png',
  },
  {
    name: '土蜘蛛',
    id: 300050,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300050.png',
  },
  {
    name: '镇墓兽',
    id: 300031,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300031.png',
  },
  {
    name: '兵主部',
    id: 300074,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300074.png',
  },
  {
    name: '镜姬',
    id: 300014,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300014.png',
  },
  {
    name: '地震鲶',
    id: 300053,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300053.png',
  },
  {
    name: '魍魉之匣',
    id: 300008,
    type: '效果抵抗',
    icon: '/src/assets/img/yuhun/300008.png',
  },
  {
    name: '蝠翼',
    id: 300004,
    type: '攻击加成',
    icon: '/src/assets/img/yuhun/300004.png',
  },
  {
    name: '幽谷响',
    id: 300049,
    type: '效果抵抗',
    icon: '/src/assets/img/yuhun/300049.png',
  },
  {
    name: '胧车',
    id: 300051,
    type: '首领御魂',
    icon: '/src/assets/img/yuhun/300051.png',
  },
  {
    name: '返魂香',
    id: 300039,
    type: '效果抵抗',
    icon: '/src/assets/img/yuhun/300039.png',
  },
  {
    name: '青女房',
    id: 300075,
    type: '暴击',
    icon: '/src/assets/img/yuhun/300075.png',
  },
  {
    name: '骰子鬼',
    id: 300033,
    type: '效果抵抗',
    icon: '/src/assets/img/yuhun/300033.png',
  },
  {
    name: '飞缘魔',
    id: 300073,
    type: '效果命中',
    icon: '/src/assets/img/yuhun/300073.png',
  },
  {
    name: '被服',
    id: 300009,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300009.png',
  },
  {
    name: '涂佛',
    id: 300076,
    type: '生命加成',
    icon: '/src/assets/img/yuhun/300076.png',
  },
];

const yuhunDict = groupBy(info, (item) => item.type);

const nameDict = {
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

export { info, nameDict, yuhunDict, yuhunOptions };

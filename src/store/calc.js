import { defineStore } from 'pinia';

import { heroPane } from '@/data/heroData.js';
import { limitAttrList } from '@/data/calc.js';

const useCalcStore = defineStore({
  id: 'calc',
  state() {
    return {
      hero: ['SSR', '阿修罗'],
      suitList: [],
      limitList: Array.from(limitAttrList, (item) => ({
        attr: item.label,
        isLimited: false,
        interval: [0, undefined],
      })),
      onlySix: true,
      onlyFull: true,
      unWeared: false,
    };
  },
  actions: {
    setHero(data) {
      this.hero = data;
    },
    addSuit(data) {
      this.suitList.push(data);
    },
    updateSuit(index, id) {
      this.suitList[index].id = id;
    },
    resetSuit() {
      this.suitList = [];
    },
    resetLimitList() {
      this.limitList = Array.from(limitAttrList, (item) => ({
        attr: item.label,
        isLimited: false,
        interval: [0, undefined],
      }));
    },
  },
  getters: {
    getHero() {
      return this.hero[1];
    },
    getHeroPanel() {
      return heroPane[this.getHero];
    },
    getSuitList() {
      return this.suitList.sort((a, b) => b.count - a.count);
    },
    getSuitLength() {
      return this.suitList.length;
    },
    // 御魂套装数量
    getSuitCount() {
      return this.suitList.reduce((prev, item) => prev + item.count, 0);
    },
    is222() {
      return this.suitList.filter((item) => item.count === 2).length > 1;
    },
    // 获取限制的属性列表
    getLimitedList() {
      return this.limitList.filter((item) => item.isLimited);
    },
  },
});

export default useCalcStore;

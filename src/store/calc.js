import { defineStore } from 'pinia';

import { heroPane } from '@/data/heroData.js';

const useCalcStore = defineStore({
  id: 'calc',
  state() {
    return {
      hero: ['SSR', '阿修罗'],
      suitList: [],
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
  },
});

export default useCalcStore;
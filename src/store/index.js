import { defineStore } from 'pinia';

const useAppStore = defineStore({
  id: 'yyx',
  state() {
    return {
      yyx: {},
    };
  },
  actions: {
    setYuhunStore(data) {
      this.yyx = data;
    },
  },
  getters: {
    hasYYXState() {
      return !!Object.keys(this.yyx).length;
    },
    getUserInfo() {
      return this.yyx.user_info;
    },
    getEqData() {
      return this.yyx.eqData;
    },
  },
});

export default useAppStore;

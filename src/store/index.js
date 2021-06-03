import { defineStore } from 'pinia';

const useStore = defineStore({
  id: 'yyx',
  state() {
    return {
      counter: 0,
      yyx: {},
    };
  },
  actions: {
    setYYX(data) {
      this.yyx = data;
    },
  },
  getters: {
    userInfo() {
      return this.yyx.user_info;
    },
    eqData() {
      return this.yyx.eqData;
    },
  },
});

export default useStore;

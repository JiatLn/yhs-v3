import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    counter: 0,
    yyx: {},
  },
  mutations: {
    UPDATE_COUNTER(state, payload) {
      state.counter = payload;
    },
    setYYX(state, data) {
      state.yyx = data;
    },
  },
  actions: {
    updateYYX(context, data) {
      context.commit('setYYX', data);
    },
  },
  getters: {
    yyx(state) {
      return state.yyx;
    },
  },
  plugins: [createPersistedState({})],
});

export default store;

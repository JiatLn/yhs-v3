import { createStore } from 'vuex';

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    UPDATE_COUNTER(state, payload) {
      state.counter = payload;
    },
  },
});

export default store;

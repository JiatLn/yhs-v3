<template>
  <ul class="infinite-list items" v-infinite-scroll="load">
    <li v-for="(eq, index) in eqData.slice(0, count)" :key="index" class="infinite-list-item item">
      <yuhun-item :yuhun="eq"></yuhun-item>
    </li>
  </ul>
</template>

<script setup>
import useStore from '@/store/index.js';
import { ref } from 'vue';

import yuhunItem from './components/yuhunItem.vue';

const store = useStore();

const eqData = store.eqData;
const count = ref(0);

const load = () => {
  if (count.value < eqData.length) {
    count.value += 8;
  }
};
</script>

<style lang="scss" scoped>
.items {
  height: 800px;
  width: 100%;
  padding: 40px 200px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}
</style>

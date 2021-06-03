<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';

import useStore from '@/store/index.js';

const loadYYXData = () => {
  const store = useStore();
  if (!Object.keys(store.yyx).length) {
    let yyx = localStorage.getItem('yyx');
    yyx && store.setYYX(JSON.parse(yyx));
  }
};

onMounted(() => {
  console.log('onMounted!!');
  loadYYXData();
});
</script>

<style></style>

<template>
  <div class="warpper">
    <div v-if="yyx.eqData">
      {{ yyx.eqData.length }}
    </div>
    <p v-else>暂无御魂数据</p>
  </div>
</template>

<script setup>
import useStore from '@/store/index.js';

const store = useStore();

const yyx = store.yyx;
</script>

<style lang="scss" scoped></style>

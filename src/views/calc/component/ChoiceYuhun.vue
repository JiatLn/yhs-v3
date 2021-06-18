<template>
  <div class="choice">
    <div class="icon" v-for="(suit, index) in suitList" :key="'suit' + index" @click="openDialog">
      <img :src="`/src/assets/img/yuhun/${suit.id}.png`" alt="御魂图标" />
    </div>
    <div class="icon icon-add" v-show="total < 6" @click="openDialog">
      <i class="el-icon-plus"></i>
    </div>
    <div class="dialog" v-show="isShow"></div>
  </div>
</template>

<script setup>
import { yuhunInfo } from '@/data/yuhuninfo.js';
import { ref, computed } from 'vue';

const suitList = ref([{ id: 300010, count: 4 }]);
// 计算御魂套装数量
const total = computed(() => {
  return suitList.value.reduce((prev, item) => prev + item.count, 0);
});

const isShow = ref(true);
const openDialog = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
.choice {
  display: flex;
  gap: 8px;
  position: relative;
  .icon {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    &.icon-add {
      background-color: #856d5d;
      color: #c9b6a4;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
}

.dialog {
  position: absolute;
  top: -100px;
  left: 100px;
  z-index: 2021;
  width: 280px;
  height: 400px;
  background-color: #d6c8b8;
  box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
}
</style>

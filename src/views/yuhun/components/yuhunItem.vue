<template>
  <div class="box">
    <div class="box-top">
      <div class="box-top__left">
        <div class="icon">
          <img :src="yuhun.suitInfo.icon" alt="御魂图标" />
        </div>
        <div class="desc">
          <span>{{ yuhun.suitInfo.name }} +{{ yuhun.level }}</span>
          <span>{{ yuhun.quality }}星</span>
        </div>
      </div>
      <div class="box-top__right">{{ yuhun.pos }}号位</div>
    </div>

    <ul class="attrs">
      <li class="attr-item">
        <span>{{ nameDict[Object.keys(yuhun.base_attr)[0]] }}</span>
        <span>+{{ formatValue(Object.values(yuhun.base_attr)[0], 0) }}</span>
      </li>
      <li
        class="attr-item"
        v-for="(keyValue, index) in Object.entries(yuhun.rand_attr)"
        :key="yuhun.id + '-' + index"
      >
        <span>{{ nameDict[keyValue[0]] }}</span>
        <span>+{{ formatValue(keyValue[1], 0) }}</span>
      </li>
    </ul>
    <div class="feature">
      <span v-if="yuhun.single_attr === 0">2件套属性：{{ yuhun.suitInfo.type }}</span>
      <span v-else>固有属性：{{ yuhun.single_attr }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

import { nameDict } from '@/data/yuhuninfo.js';

const props = defineProps({
  yuhun: {
    type: Object,
    require: true,
  },
});

const yuhun = props.yuhun;

const formatValue = (val, precision = 2) => {
  if (val <= 1) {
    return (val * 100).toFixed(precision) + '%';
  } else {
    return val.toFixed(precision);
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 232px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #d6c9b9;
  box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
  .box-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    .box-top__left {
      display: flex;
      align-items: center;
      .desc {
        display: flex;
        flex-direction: column;
      }
      .icon {
        width: 36px;
        height: 36px;
        margin-right: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .attrs {
    height: 125px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #a68d70;
    .attr-item {
      width: 200px;
      height: 20px;
      color: #1e1e1e;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2px 0;
      font-size: 14px;
      &:first-child {
        color: #d96932;
      }
    }
  }
  .feature {
    padding-top: 8px;
    font-size: 14px;
    color: #777;
    display: flex;
    flex-direction: column;
  }
}
</style>

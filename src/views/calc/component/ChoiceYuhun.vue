<template>
  <div class="choice">
    <div
      class="icon"
      v-for="(suit, index) in suitList"
      :key="'suit' + index"
      @click="openDialog(index)"
    >
      <img :src="`/src/assets/img/yuhun/${suit.id}.png`" alt="御魂图标" />
    </div>
    <div class="icon icon-add" v-show="total < 6" @click="openDialog(suitList.length)">
      <i class="el-icon-plus"></i>
    </div>
    <div class="clear-btn" @click="resetSuit" v-show="total > 0">清空</div>
    <div class="dialog" v-show="isShow">
      <div class="marker"></div>
      <div class="dialog__top">
        <div class="tabs">
          <div class="tab-item" @click="tabClick(true)">
            <div class="checkbox" :class="{ 'is-checked': checked4 }"></div>
            <span>四件套</span>
          </div>
          <div class="tab-item" @click="tabClick(false)">
            <div class="checkbox" :class="{ 'is-checked': !checked4 }"></div>
            <span>两件套</span>
          </div>
        </div>
        <div class="close-btn" @click="isShow = false">×</div>
      </div>
      <div class="dialog__body">
        <div class="yuhun-items">
          <div
            class="yuhun-item"
            v-for="yuhun in yuhunInfo"
            :key="yuhun.id"
            @click="changeSuit(yuhun.id)"
          >
            <img :src="`/src/assets/img/yuhun/${yuhun.id}.png`" alt="御魂图标" />
            <div class="desc">
              <span>{{ yuhun.name }}</span>
              <span>{{ yuhun.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { yuhunInfo } from '@/data/yuhuninfo.js';
import { assignIn } from 'lodash';
import { ref, computed } from 'vue';

const suitList = ref([]);
// 计算御魂套装数量
const total = computed(() => {
  return suitList.value.reduce((prev, item) => prev + item.count, 0);
});
// 是否为 2+2+2
const is222 = computed(() => {
  return suitList.value.filter(item => item.count === 2).length > 1;
});
// 点击了第n个位置的套装
const nthOfSuit = ref(0);

const resetSuit = () => {
  suitList.value = [];
  checked4.value = true;
  isShow.value = false;
};

// dialog相关
// 是否打开弹窗
const isShow = ref(false);
const openDialog = (index = 0) => {
  nthOfSuit.value = index;
  isShow.value = !isShow.value;
};
const checked4 = ref(true);
const changeSuit = id => {
  if (checked4.value) {
    if (total.value < 4) {
      suitList.value.push({ id, count: 4 });
    } else {
      suitList.value[0].id = id;
    }
    checked4.value = false;
  } else {
    if (total.value < 6) {
      suitList.value.push({ id, count: 2 });
    } else {
      if (is222.value) {
        suitList.value[nthOfSuit.value].id = id;
      } else {
        suitList.value[1].id = id;
      }
    }
  }
  isShow.value = false;
  // 排序
  suitList.value = suitList.value.sort((a, b) => b.count - a.count);
};
const tabClick = bool => {
  if (is222.value) {
    console.log(`当前已选择${total.value}个御魂，无法替换成四件套`);
    return false;
  }
  checked4.value = bool;
};
</script>

<style lang="scss" scoped>
.choice {
  display: flex;
  gap: 8px;
  position: relative;
  align-items: center;
  .clear-btn {
    cursor: pointer;
    margin-left: 8px;
  }
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
  user-select: none;
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 2021;
  width: 310px;
  height: 450px;

  .marker {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: -1;
  }
  .dialog__top {
    display: flex;
    background-color: #584440;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    .tabs {
      display: flex;
      padding: 4px;
      .tab-item {
        padding: 8px;
        // border: 1px solid #b48d5a;
        display: flex;
        cursor: pointer;
        color: #d1c8b6;
        .checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid #d1c8b6;
          margin-right: 8px;
          position: relative;
          &.is-checked {
            background-color: #3541a3;
            &::before {
              content: '✔';
              color: #fff;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
    .close-btn {
      font-size: 18px;
      width: 20px;
      height: 20px;
      color: #fff;
      margin-right: 8px;
      cursor: pointer;
    }
  }
  .dialog__body {
    height: 400px;
    background-color: #d6c8b8;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    overflow-y: scroll;
    // margin-left: 4px;
    padding: 2px 0;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    .yuhun-items {
      padding: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-left: 2px;
      .yuhun-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 142px;
        height: 60px;
        border: 1px solid #b48d5a;
        padding: 2px 8px;
        &:hover {
          background: #b48d5a;
          color: #d6c8b8;
        }
        img {
          width: 44px;
          height: 44px;
        }
        .desc {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>

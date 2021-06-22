<template>
  <div class="limit-attr">
    <div class="limit-btn" @click="openDialog">添加+</div>

    <!-- 弹窗 -->
    <div class="dialog" v-show="isShow">
      <div class="dialog__top">
        <div class=""></div>
        <div class="close-btn" @click="isShow = false">×</div>
      </div>
      <div class="dialog__body">
        <div class="body__left">
          <div class="attr-items">
            <div
              class="attr-item"
              :class="{ active: limitAttrId === attr.id }"
              v-for="attr in attrList"
              :key="'attr' + attr.id"
              @click="changeLimitAttr(attr.id)"
            >
              {{ attr.label }}
            </div>
          </div>
        </div>
        <div class="body__right">
          <span>速度属性范围</span>
          <div class="limit-input">
            <el-input-number
              v-model="limitRange[0]"
              controls-position="right"
              :min="0"
              :max="limitRange[1]"
              :step="1"
            ></el-input-number>
            <span>-</span>
            <el-input-number
              v-model="limitRange[1]"
              controls-position="right"
              :min="limitRange[0]"
              :step="1"
            ></el-input-number>
          </div>
          <div class="btns">
            <div class="btn">超星</div>
            <div class="btn">吃星</div>
            <div class="btn">重置</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// dialog相关
// 是否打开弹窗
const isShow = ref(false);
const openDialog = (index = 0) => {
  isShow.value = !isShow.value;
};

// 限制属性列表
const attrList = [
  { id: 0, name: 'attack', label: '攻击' },
  { id: 1, name: '', label: '暴击' },
  { id: 2, name: '', label: '暴击伤害' },
  { id: 3, name: '', label: '速度' },
  { id: 4, name: '', label: '防御' },
  { id: 5, name: '', label: '生命' },
  { id: 6, name: '', label: '效果命中' },
  { id: 7, name: '', label: '效果抵抗' },
];

// 属性范围
const limitRange = ref([156, 158]);
// 当前属性id
const limitAttrId = ref(3);

const changeLimitAttr = (id) => {
  limitAttrId.value = id;
};
</script>

<style lang="scss" scoped>
.limit-attr {
  position: relative;
  .limit-btn {
    cursor: pointer;
    width: 160px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    background-color: #e6dbcd;
    color: #917a6c;
    border: 1px solid #917a6c;
  }
}

.dialog {
  user-select: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2021;
  width: 720px;
  // height: 300px;
  .dialog__top {
    height: 36px;
    display: flex;
    background-color: #584440;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
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
    height: 240px;
    background-color: #d6c8b8;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    padding: 2px 0;
    display: flex;
    gap: 16px;
    padding: 8px 16px;
    .body__left {
      width: 50%;

      display: flex;

      justify-content: center;
      align-items: center;
      .attr-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 16px 24px;
        .attr-item {
          cursor: pointer;
          width: 140px;
          text-align: center;
          height: 28px;
          line-height: 28px;
          background-color: #e6dbcd;
          color: #584440;
          border: 1px solid #917a6c;
          transition: 0.6s;
          &.active {
            color: #e6dbcd;
            background-color: #584440;
          }
        }
      }
    }
    .body__right {
      width: 50%;
      border: 1px solid #b4a696;
      margin: 16px;
      background-color: #cbbfb0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      .limit-input {
        display: flex;
        gap: 8px;
        align-items: center;
        :deep .el-input-number {
          width: 93px;
        }
        :deep .el-input__inner {
          padding: 0;
          height: 30px;
          width: 60px;
          border-radius: 0;
          background-color: #cbbfb0;
          color: #584440;
          border: 1px solid #826b5a;
        }
        :deep .el-input-number__decrease,
        :deep .el-input-number__increase {
          background-color: #826b5a;
          color: #c5b3a1;
          border: none;
        }
      }
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-top: 20px;
        .btn {
          cursor: pointer;
          width: 80px;
          text-align: center;
          height: 28px;
          line-height: 28px;
          background-color: #e6dbcd;
          color: #584440;
          border: 1px solid #917a6c;
          transition: 0.6s;
          &:hover {
            color: #e6dbcd;
            background-color: #584440;
          }
        }
      }
    }
  }
}
</style>

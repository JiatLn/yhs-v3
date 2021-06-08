<template>
  <div class="warpper">
    <el-tabs type="border-card" class="card">
      <el-tab-pane v-for="i in 6" :key="'pos' + i">
        <template #label>
          <span class="label-pos">{{ i }}号位</span>
          <el-tag type="success" size="mini" effect="plain">
            {{ fullSpeed[i].length }}
          </el-tag>
        </template>
        <ul class="speed-list">
          <li v-for="item in fullSpeed[i]" :key="item.id" class="list-item">
            <div class="name">
              {{ item.suitInfo.name }}
              <span class="attr" v-if="[4, 6].includes(i)">
                「{{ nameDict[Object.keys(item.base_attr)[0]].replace('加成', '') }}」
              </span>
            </div>
            <span class="number">{{ format45(item.rand_attr.Speed, 2) }}</span>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import _ from 'lodash';

import useStore from '@/store/index.js';
import { nameDict } from '@/data/yuhuninfo.js';

const store = useStore();

const eqData = store.eqData;

function format45(val, v2) {
  if (isNaN(val) || val == undefined || val == null) {
    return null;
  }
  v2 = Math.pow(10, v2);
  return Math.round(val * v2) / v2;
}

const fullSpeed = _.groupBy(
  _.sortBy(
    eqData.filter((item) => {
      if (item.pos === 2) {
        // 二号位显示脖子
        return item.rand_attr.Speed >= 12 && item.base_attr.Speed === 57;
      } else {
        return item.rand_attr.Speed >= 15;
      }
    }),
    (item) => -item.rand_attr.Speed,
  ),
  (item) => item.pos,
);
</script>

<style lang="scss" scoped>
.card {
  width: 750px;
  .label-pos {
    margin-right: 8px;
  }
  .speed-list {
    height: 300px;
    overflow-y: scroll;

    .list-item {
      margin: 8px 0;
      width: 200px;
      display: flex;
      justify-content: space-between;
      &:first-child .number {
        color: #f56c6c;
      }
      .name {
        align-items: center;
        display: flex;
        .attr {
          color: #7f7f6d;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

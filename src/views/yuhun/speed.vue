<template>
  <div class="warpper">
    <div class="warpper-content">
      <el-descriptions class="desc" size="medium" direction="vertical" border>
        <el-descriptions-item label="散件一速">{{ 57 + sum(maxSpeed) }}</el-descriptions-item>
        <el-descriptions-item label="各位置最高速">{{ maxSpeed.join(' | ') }}</el-descriptions-item>
      </el-descriptions>
      <el-tabs type="border-card" class="card">
        <el-tab-pane v-for="i in 6" :key="'pos' + i">
          <template #label>
            <span class="label-pos">{{ i }}号位</span>
            <el-tag type="success" size="mini" effect="plain">
              {{ fullSpeed[i].length }}
            </el-tag>
          </template>
          <ul class="speed-list">
            <li
              v-for="item in fullSpeed[i]"
              :key="item.id"
              class="list-item"
              :class="{ zcm: item.suitInfo.name === '招财猫' }"
            >
              <div class="name">
                {{ item.suitInfo.name }}
                <span class="attr" v-if="[4, 6].includes(i)">
                  「{{ attrDict[Object.keys(item.base_attr)[0]].replace('加成', '') }}」
                </span>
              </div>
              <span class="number">{{ format45(item.rand_attr.Speed, 2) }}</span>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { groupBy, sortBy, sum } from 'lodash';

import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { attrDict } from '@/data/yuhuninfo.js';
import { format45 } from '@/utils/format.js';

const { getEqData } = useYuhunStore();

const fullSpeed = groupBy(
  sortBy(
    getEqData.value.filter((item) => {
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

const maxSpeed = Object.entries(fullSpeed).map(([pos, yhList]) =>
  format45(yhList[0].rand_attr.Speed, 4),
);
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .warpper-content {
    .desc {
      margin-bottom: 16px;
    }

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
          &.zcm {
            color: #b78161;
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
  }
}
</style>

<template>
  <div class="warpper">
    <div class="content">
      <el-cascader
        v-model="suitName"
        :options="yuhunOptions"
        :props="{ expandTrigger: 'hover', emitPath: false }"
      ></el-cascader>
      <el-slider
        class="slider"
        v-model="rankNum"
        :min="1"
        :max="9"
        :marks="{ 3: '3', 6: '6', 9: '9' }"
        show-stops
      >
      </el-slider>
      <el-checkbox-group v-model="calcType">
        <el-checkbox label="S">速度</el-checkbox>
        <el-checkbox label="A">输出</el-checkbox>
        <el-checkbox label="F">治疗</el-checkbox>
        <el-checkbox label="D">抵抗</el-checkbox>
        <el-checkbox label="M">命中</el-checkbox>
      </el-checkbox-group>
      <div class="graph">
        <radar-chart :data="goodEq" :legend="suitName"></radar-chart>
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash';

import useStore from '@/store/index.js';
import { calcPoint } from '@/utils/parseJson.js';
import RadarChart from '@/components/echarts/RadarChart.vue';
import { ref, computed } from 'vue';

import { yuhunDict } from '@/data/yuhuninfo.js';

const store = useStore();
const eqData = store.eqData;

const suitName = ref('破势');
const calcType = ref(['A', 'S']);
const rankNum = ref(6);
const yuhunOptions = Object.entries(yuhunDict).map(([key, value]) => ({
  label: key,
  children: value.map((item) => ({ label: item.name, value: item.name })),
  value: key,
}));

let goodEq = computed(() => {
  let res = _.countBy(
    eqData
      .filter((eq) => eq.suitInfo.name === suitName.value)
      .map((item) => ({ ...item, point: calcPoint(item, calcType.value) }))
      .filter((eq) => eq.point >= rankNum.value),
    (item) => item.pos,
  );
  res = _.merge({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, res);
  return Object.values(res);
});
</script>

<style lang="scss" scoped>
.warpper {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * + * {
      margin-top: 32px;
    }
    .slider {
      width: 500px;
    }
    .graph {
      width: 360px;
      height: 360px;
    }
  }
}
</style>

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
        <radar-chart :data="score" :legend="suitName"></radar-chart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRaw } from 'vue';

import RadarChart from '@/components/echarts/RadarChart.vue';
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { getSuitPosCountByScore } from '@/utils/analysis.js';
import { yuhunOptions } from '@/data/yuhuninfo.js';

const { getEqData } = useYuhunStore();
const suitName = ref('破势');
const calcType = ref(['A', 'S']);
const rankNum = ref(6);
const score = computed(() => getSuitPosCountByScore(suitName.value, calcType.value, rankNum.value));
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

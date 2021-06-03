<template>
  <div class="warpper">
    <template v-if="eqData">
      <el-descriptions title="账号信息" size="medium" class="desc">
        <el-descriptions-item label="用户名">{{ userInfo.user_name }}</el-descriptions-item>
        <el-descriptions-item label="服务器">{{ userInfo.server_name }}</el-descriptions-item>
        <el-descriptions-item label="userId">
          <el-tag size="small">{{ userInfo.user_id }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="日期">{{ userInfo.time_stamp }}</el-descriptions-item>
        <el-descriptions-item label="御魂数量">
          {{ eqData.length }}
        </el-descriptions-item>
      </el-descriptions>
    </template>
    <p v-else>暂无御魂数据</p>
  </div>
</template>

<script setup>
import _ from 'lodash';

import useStore from '@/store/index.js';

const store = useStore();

const eqData = store.eqData;
const userInfo = store.userInfo;
</script>

<style lang="scss" scoped>
.warpper {
  align-items: flex-start;
  padding: 48px 24px;
  .desc {
    width: 600px;
  }
}
</style>

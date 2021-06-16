<template>
  <div class="warpper">
    <template v-if="hasYYXState">
      <el-descriptions title="账号信息" size="medium" class="desc">
        <el-descriptions-item label="用户名">{{ getUserInfo.user_name }}</el-descriptions-item>
        <el-descriptions-item label="服务器">{{ getUserInfo.server_name }}</el-descriptions-item>
        <el-descriptions-item label="userId">
          <el-tag size="small">{{ getUserInfo.user_id }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="日期">{{ getUserInfo.time_stamp }}</el-descriptions-item>
        <el-descriptions-item label="御魂数量">
          {{ getEqData.length }}
        </el-descriptions-item>
      </el-descriptions>
    </template>
    <p v-else>暂无御魂数据</p>
  </div>
</template>

<script setup>
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';

const { getEqData, getUserInfo, hasYYXState } = useYuhunStore();
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

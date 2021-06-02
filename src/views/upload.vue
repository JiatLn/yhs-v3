<template>
  <div class="warpper">
    <el-upload
      class="upload"
      drag
      action=""
      multiple
      :limit="1"
      accept=".json"
      :auto-upload="false"
      :on-change="handleChangeFile"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将json文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">* 只能上传yyx导出的Json文件，且不超过10M</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

import { parseYhJson } from '@/utils/parseJson.js';

const store = useStore();

const handleChangeFile = (file) => {
  const reader = new FileReader();
  reader.readAsText(file.raw);
  reader.onload = () => {
    const yyxJson = JSON.parse(reader.result);
    let data = parseYhJson(yyxJson);
    store.commit('setYYX', data);
  };
};
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .el-upload__tip {
    text-indent: 2em;
  }
}
</style>

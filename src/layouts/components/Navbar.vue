<template>
  <div class="navbar">
    <bread-crumb class="bread-crumb"></bread-crumb>
  </div>
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue';
</script>

<style lang="scss" scoped>
$navHeight: 50px;

.navbar {
  height: $navHeight;
  background-color: white;
  border-bottom: 1px solid #eee;
  width: 100%;
  display: flex;
  align-items: center;
  .bread-crumb {
    margin: 0 10px;
  }
}
</style>

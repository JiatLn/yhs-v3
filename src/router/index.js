import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layouts/index.vue';

export const routes = [
  {
    path: '/',
    component: Layout,
    alwaysShow: true,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue'),
        name: 'home',
      },
    ],
  },
  {
    path: '/upload',
    component: Layout,
    alwaysShow: true,
    meta: { title: '上传文件', icon: 'el-icon-upload' },
    children: [
      {
        path: '',
        component: () => import('@/views/upload.vue'),
        name: 'upload',
      },
    ],
  },
  {
    path: '/yuhun',
    component: Layout,
    alwaysShow: true,
    meta: { title: '御魂信息', icon: 'el-icon-upload' },
    children: [
      {
        path: '',
        component: () => import('@/views/yuhun/summary.vue'),
        name: 'summary',
      },
    ],
  },
];

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

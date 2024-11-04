import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PassengerDetail from '@/views/PassengerDetail.vue';
import AirlineDetail from '@/views/AirlineDetail.vue'; // 引入航空公司详情组件

const routes = [
  {
    path: '/',
    name: 'HomeView', // 路由名称与组件名称一致
    component: HomeView,
  },
  {
    path: '/passenger/:id',
    name: 'PassengerDetail',
    component: PassengerDetail,
    children: [
      {
        path: 'airline/:airlineId', // 嵌套路由路径
        name: 'AirlineDetail',
        component: AirlineDetail,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*', // 处理未找到的路由
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'), // 动态导入未找到页面
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

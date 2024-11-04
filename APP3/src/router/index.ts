import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PassengerDetail from '@/views/PassengerDetail.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/passenger/:id',  // 直接显示乘客详细信息
    name: 'PassengerDetail',
    component: PassengerDetail,
  },
  {
    path: '/:pathMatch(.*)*', // 处理未找到的路由
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

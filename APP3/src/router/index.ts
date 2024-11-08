import { createRouter, createWebHistory } from 'vue-router';
import type { RouteLocationNormalized } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PassengerDetail from '@/views/PassengerDetail.vue';
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/passenger/:id',
    name: 'PassengerDetail',
    component: PassengerDetail,
    props: true,
    beforeEnter: async (to: RouteLocationNormalized) => {
      try {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger/${to.params.id}`);
        const passengerData = response.data;

        if (passengerData) {
          to.params.passengerData = passengerData;
        } else {
          return { name: 'NotFound' };
        }
      } catch (error) {
        console.error('Error fetching passenger data:', error);
        return { name: 'NotFound' };
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

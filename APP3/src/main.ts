import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const app = createApp(App);

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

app.use(router).mount('#app');

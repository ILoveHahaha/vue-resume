import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home.vue';
import test from '@/components/test/test.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: home
  }, {
    path: '/test',
    name: 'Test',
    component: test
  }]
});

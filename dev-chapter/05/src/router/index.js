import Vue from 'vue';
import Router from 'vue-router';
// 相对路径引入
// import goods from '../components/goods/goods';
// import ratings from '../components/ratings/ratings';
// import seller from '../components/seller/seller';
// 绝对路径引入: webpack 配置了@别名
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/goods' },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings,
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller,
    },
  ],
  linkActiveClass: 'active',
});

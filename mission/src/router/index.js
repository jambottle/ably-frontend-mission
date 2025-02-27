import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemRoutes from '@/router/ItemRoutes';
import WishRoutes from '@/router/WishRoutes';
import CartRoutes from '@/router/CartRoutes';
import OrderRoutes from '@/router/OrderRoutes';
import UserRoutes from '@/router/UserRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  ...ItemRoutes,
  ...WishRoutes,
  ...CartRoutes,
  ...OrderRoutes,
  ...UserRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

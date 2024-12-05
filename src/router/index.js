import { createRouter, createWebHistory } from 'vue-router';
import PlanPackages from '../components/PlanPackages.vue';
import Customers from '../components/Customers.vue';
import GiphyPage from '@/components/GiphyPage.vue';

const routes = [
  {
    path: '/',
    name: 'PlanPackages',
    component: PlanPackages,
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/giphy',
    name: 'GiphyPage',
    component: GiphyPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
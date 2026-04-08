import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/api/',
      name: 'transactionList',
      component: () => import('@/components/views/TransactionList.vue'),
    },
  ],
});

export default router;

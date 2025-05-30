import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404Page.vue'),
      name: 'notFound',
    },
    {
      path: '/',
      component: () => import('@/pages/AuthPage.vue'),
      name: 'auth',
    },
    {
      path: '/main',
      component: () => import('@/pages/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/components/MeditationCards.vue'),
          name: 'meditations',
        },
        { path: 'stat', component: () => import('@/pages/StatView.vue'), name: 'stat' },
      ],
    },
  ],
  history: createWebHistory(),
})

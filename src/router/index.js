import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BencaoIntroView from '@/views/BencaoIntroView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ShiliaoView from '@/views/ShiliaoView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/bencao', name: 'bencao', component: BencaoIntroView },
    { path: '/catalog', name: 'catalog', component: CatalogView },
    { path: '/shiliao', name: 'shiliao', component: ShiliaoView },
    { path: '/goji', name: 'goji', component: ProductDetailView, props: { productId: 'goji' } },
    { path: '/lotus', name: 'lotus', component: ProductDetailView, props: { productId: 'lotus' } },
    { path: '/suanzao', name: 'suanzao', component: ProductDetailView, props: { productId: 'suanzao' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

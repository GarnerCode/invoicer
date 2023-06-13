import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvoiceView from '@/views/InvoiceView.vue'
import EditInvoiceView from '@/views/EditInvoiceView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/invoice/:id',
    name: 'invoice',
    component: InvoiceView,
  },
  {
    path: '/edit-invoice/new',
    name: 'new-invoice',
    component: EditInvoiceView,
  },
  {
    path: '/edit-invoice/:id',
    name: 'edit-invoice',
    component: EditInvoiceView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

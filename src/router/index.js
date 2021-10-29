import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/connected-meters',
    name: 'Connected-Meters',
    component: () => import('../views/ConnectedMeters.vue')
  },
  {
    path: '/malfunctions',
    name: 'Malfunctions',
    component: () => import('../views/Malfunctions.vue')
  },
  {
    path: '/monthly-readings',
    name: 'Monthly-Readings',
    component: () => import('../views/MonthlyReadings.vue')
  },
  {
    path: '/responses',
    name: 'Responses',
    component: () => import('../views/Responses.vue')
  },
  {
    path: '/water-contracts',
    name: 'Water-Contracts',
    component: () => import('../views/WaterContracts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

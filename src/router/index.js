import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ConnectedMeters from '../views/ConnectedMeters.vue'
import Malfunctions from '../views/Malfunctions.vue'
import MonthlyReadings from '../views/MonthlyReadings.vue'
import Responses from '../views/Responses.vue'
import WaterContracts from '../views/WaterContracts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/connected-meters',
    name: 'Connected-Meters',
    component: ConnectedMeters
  },
  {
    path: '/malfunctions',
    name: 'Malfunctions',
    component: Malfunctions
  },
  {
    path: '/monthly-readings',
    name: 'Monthly-Readings',
    component: MonthlyReadings
  },
  {
    path: '/responses',
    name: 'Responses',
    component: Responses
  },
  {
    path: '/water-contracts',
    name: 'Water-Contracts',
    component: WaterContracts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

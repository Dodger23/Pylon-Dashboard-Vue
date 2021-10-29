import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faWater, faWrench, faReplyAll, faFileAlt, faCubes, faTimes, faCheck, faCalendarPlus, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'
import VueApexCharts from 'vue3-apexcharts'
library.add(faHome, faWater, faWrench, faReplyAll, faFileAlt, faCubes, faTimes, faCheck, faCalendarPlus, faDatabase)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.use(router)
app.use(VueApexCharts)
app.mount('#app')

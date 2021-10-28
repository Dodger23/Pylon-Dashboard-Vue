import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faWater, faWrench, faReplyAll, faFileAlt, faCubes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'
library.add(faHome, faWater, faWrench, faReplyAll, faFileAlt, faCubes)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.use(router)
app.mount('#app')

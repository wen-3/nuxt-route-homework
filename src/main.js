import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupCalendar } from 'v-calendar'

const app = createApp(App)


app.use(setupCalendar, {})

app.use(router)

app.mount('#app')

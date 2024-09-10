import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { toolTipPlugin } from './plugins/ToolTip'

const app = createApp(App)

app.use(router)
app.use(toolTipPlugin)

app.mount('#app')

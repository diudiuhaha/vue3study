import { createApp } from 'vue'

//全局引入element-plus
// import ElementPlus from 'element-plus' 
// import 'element-plus/dist/index.css'
//引入路由
import router from './router'

import App from './App.vue'

//注册图标1
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入less样式
import './assets/less/index.less'

const app = createApp(App)

//注册图标2
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(ElementPlus)
app.use(router)
app.mount('#app')



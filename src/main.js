import './assets/main.css'
import 'flowbite/dist/flowbite.js'
import './assets/font-awesome-icons.js'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {VueMasonryPlugin} from 'vue-masonry';

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueMasonryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App)
app.config.globalProperties.emitter = emitter;



app
    .use(router)
    .use(store)

    .mount("#app");

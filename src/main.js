import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGtag from "vue-gtag"
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faDiscord, faEnvelope, faFacebookSquare, faYoutube)

const app = createApp(App)
app.use(router)
app.use(VueGtag, {
  config: { id: "G-88T7YB7V5W" }
}, router)
app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
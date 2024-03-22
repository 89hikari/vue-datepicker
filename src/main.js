import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/styles'
import './main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

library.add(faCalendar)

createApp(App)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .mount('#app')

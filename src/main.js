/* import App from './App.vue'
import router from './router.js'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import "bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from 'vue'
const app = createApp(App);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAU8TmfOrcYFnueIKID2uqF9JWlf0yOcrs',
         language: 'ar',
    },
})

createApp(App).use(router).mount('#app') */

import App from './App.vue'
import router from './router.js'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import BaseCard from './UI/BaseCard.vue'

import "bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import i18n from './locale/languages'

import { createApp } from 'vue'

const app = createApp(App)

.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAU8TmfOrcYFnueIKID2uqF9JWlf0yOcrs',
        /* language: 'ar', */
    },
})

app.component('base-card', BaseCard)

app.use(i18n)
.use(router).mount('#app')


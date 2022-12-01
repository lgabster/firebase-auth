import { createRouter, createWebHistory } from 'vue-router';

import ChangeLanguage from './components/ChangeLanguage.vue';
import GoogleMap from './components/GoogleMap.vue';
import HistoryPage from './components/HistoryPage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/settings', name: 'changeLanguage', component: ChangeLanguage },
        { path: '/map', name: 'googleMaps', component: GoogleMap },
        { path: '/history', name: 'historyPage', component: HistoryPage },
        { path: '/login', name: 'loginPage', component: LoginPage },
        { path: '/register', name: 'registerPage', component: RegisterPage },
    ],
});

export default router;
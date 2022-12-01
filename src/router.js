import { createRouter, createWebHistory } from 'vue-router';

import ChangeLanguage from './components/ChangeLanguage.vue';
import GoogleMap from './components/GoogleMap.vue';
import HistoryPage from './components/HistoryPage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';

import { isAuthenticated } from './auth';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/settings', name: 'changeLanguage', component: ChangeLanguage, meta: { protected: true } },
        { path: '/map', name: 'googleMaps', component: GoogleMap, meta: { protected: true } },
        { path: '/history', name: 'historyPage', component: HistoryPage, meta: { protected: true } },
        { path: '/login', name: 'loginPage', component: LoginPage },
        { path: '/register', name: 'registerPage', component: RegisterPage },
    ],
});

router.beforeEach(async (to) => {
    if (!isAuthenticated.value && to.meta.protected && to.name !== 'loginPage') {
        return { name: 'loginPage' }
    }
})

export default router;

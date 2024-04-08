//importo le funzioni di Vue ROuter
import { createRouter, createWebHistory } from 'vue-router';

//importo le pagini 
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';

//definisco le rotte
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/contact-us', component: ContactUsPage },
    ]
})
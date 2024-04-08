//importo le funzioni di Vue ROuter
import { createRouter, createWebHistory } from 'vue-router';

//importo le pagini 
import HomePage from '../components/pages/HomePage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

//definisco le rotte
export default createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/projects/:id', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
})
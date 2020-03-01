import Vue from 'vue';
import Router from 'vue-router';

import ShowcasePage from '@/components/showcase/showcase.page.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ShowcasePage,
        },
        {
            path: '/page-showcase',
            name: 'page-showcase',
            component: ShowcasePage,
        },
    ],
});

export default router;

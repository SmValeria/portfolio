import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from './components/pages/Auth';
import About from './components/pages/About';
import Reviews from './components/pages/Reviews';
import Works from './components/pages/Works';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Auth
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/reviews',
        component: Reviews
    },
    {
        path: '/works',
        component: Works
    }
];

export default new VueRouter({ routes });
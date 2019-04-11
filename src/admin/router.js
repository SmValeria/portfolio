import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: () => import("./components/pages/Auth.vue")
    },
    {
        path: '/',
        component: () => import("./components/pages/About")
    },
    {
        path: '/reviews',
        component: () => import("./components/pages/Reviews")
    },
    {
        path: '/works',
        component: () => import("./components/pages/Works")
    }
];

export default new VueRouter({ routes });
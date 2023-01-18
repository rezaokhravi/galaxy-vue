import {createRouter, createWebHistory, useRoute} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        beforeEnter: async (_to, _from, next) => {
            //await Promise.resolve(true); // Here I am doing calls to my API.
            if (!_to.query.hasOwnProperty('q')) {
                next({path: '/notfound'});
            } else {
                next();
            }
        },
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/notfound',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "about" */ '../views/NotFoundView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

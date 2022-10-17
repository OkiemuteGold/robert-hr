import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: "Roberto Horse Riding",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Roberto Horse Riding",
                },
                {
                    property: "og:description",
                    content:
                        "Roberto Horse Riding",
                },
            ],
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {
            title: "Roberto Horse Riding | About Us",
            metaTags: [
                {
                    name: "description",
                    content:
                        "About Roberto Horse Riding",
                },
                {
                    property: "og:description",
                    content:
                        "About Roberto Horse Riding",
                },
            ],
        },
    }
]

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0,
            };
        }
    },
    base: process.env.BASE_URL,
    routes,

    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

const DEFAULT_TITLE = "Roberto Horse Riding";

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudView from '../views/StudView.vue'
import StudView01 from '../views/StudView01.vue'
import StudView02 from '../views/StudView02.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import FourZeroFour from '../views/FourZeroFour.vue'

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
    },
    {
        path: '/studs',
        name: 'Studs',
        component: StudView,
        meta: {
            title: "Roberto Horse Riding | Studs",
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
        path: '/studs01',
        name: 'Studs01',
        component: StudView01,
        meta: {
            title: "Roberto Horse Riding | Studs01",
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
        // children: [
        //     {
        //         path: 'studs011',
        //         name: 'Studs011',
        //         component: StudView011,
        //     },
        //     {
        //         path: 'studs012',
        //         name: 'Studs012',
        //         component: StudView012,
        //     }
        // ]
    },
    {
        path: '/studs02',
        name: 'Studs02',
        component: StudView02,
        meta: {
            title: "Roberto Horse Riding | Studs02",
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
        // children: [
        //     {
        //         path: 'studs021',
        //         name: 'Studs021',
        //         component: StudView021,
        //     },
        //     {
        //         path: 'studs022',
        //         name: 'Studs022',
        //         component: StudView022,
        //     }
        // ]
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryView,
        meta: {
            title: "Roberto Horse Riding | Gallery",
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
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: "Roberto Horse Riding | Contact Us",
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
        path: '*',
        name: 'FourZeroFour',
        component: FourZeroFour,
        meta: {
            transition: "fade",
            title: "Roberto Horse Riding | 404 - Page Not Found",
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
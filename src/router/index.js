import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudView from '../views/StudView.vue'
import StallionView from '../views/StallionView.vue'
import MaresView from '../views/MaresView.vue'
import FoalsView from '../views/FoalsView.vue'
import FilliesView from '../views/FilliesView.vue'
import StudDetailsView from '../views/StudDetailsView.vue'
import ServicesView from '../views/ServicesView.vue'
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
        path: '/stallion',
        name: 'Stallion',
        component: StallionView,
        meta: {
            title: "Roberto Horse Riding | Stallion",
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
        path: '/mares',
        name: 'Mares',
        component: MaresView,
        meta: {
            title: "Roberto Horse Riding | Mares",
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
        path: '/foals',
        name: 'Foals',
        component: FoalsView,
        meta: {
            title: "Roberto Horse Riding | Foals",
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
        path: '/fillies',
        name: 'Fillies',
        component: FilliesView,
        meta: {
            title: "Roberto Horse Riding | Fillies",
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
        path: '/stallion-details/:id',
        name: 'StallionDetails',
        component: StudDetailsView,
        meta: {
            title: "Roberto Horse Riding | Stallion",
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
        path: '/services',
        name: 'Services',
        component: ServicesView,
        meta: {
            title: "Roberto Horse Riding | Services",
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
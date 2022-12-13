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
import BlogView from '../views/BlogView.vue'
import FourZeroFour from '../views/FourZeroFour.vue'

import $ from "jquery";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: "Yeguada Fernández Millares",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
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
            title: "Yeguada Fernández Millares | About The Stud",
            metaTags: [
                {
                    name: "description",
                    content:
                        "About The Stud",
                },
                {
                    property: "og:description",
                    content:
                        "About The Stud",
                },
            ],
        },
    },
    {
        path: '/studs',
        name: 'Studs',
        component: StudView,
        meta: {
            title: "Yeguada Fernández Millares | Studs",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/stallion',
        name: 'Stallion',
        component: StallionView,
        meta: {
            title: "Yeguada Fernández Millares | Stallion",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/mares',
        name: 'Mares',
        component: MaresView,
        meta: {
            title: "Yeguada Fernández Millares | Mares",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/foals',
        name: 'Foals',
        component: FoalsView,
        meta: {
            title: "Yeguada Fernández Millares | Foals",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/fillies',
        name: 'Fillies',
        component: FilliesView,
        meta: {
            title: "Yeguada Fernández Millares | Fillies",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/stud-details/:id',
        name: 'StudDetails',
        component: StudDetailsView,
        meta: {
            title: "Yeguada Fernández Millares | Stallion",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],

        },
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesView,
        meta: {
            title: "Yeguada Fernández Millares | Services",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryView,
        meta: {
            title: "Yeguada Fernández Millares | Gallery",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: "Yeguada Fernández Millares | Contact Us",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
                },
            ],
        },
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogView,
        meta: {
            title: "Yeguada Fernández Millares | Blog",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
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
            title: "Yeguada Fernández Millares | 404 - Page Not Found",
            metaTags: [
                {
                    name: "description",
                    content:
                        "Yeguada Fernández Millares",
                },
                {
                    property: "og:description",
                    content:
                        "Yeguada Fernández Millares",
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

const DEFAULT_TITLE = "Yeguada Fernández Millares";

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });

    var mobileMenuToggler = $('.ow-navigation .navbar-toggle'),
        mobileMenu = $('.ow-navigation .navbar-collapse');

    if (mobileMenuToggler.attr('aria-expanded') === 'true') {
        mobileMenuToggler.attr('aria-expanded', 'false');
        mobileMenuToggler.removeClass("collapsed");
        mobileMenu.attr('aria-expanded', 'false');
        mobileMenu.removeClass("collapse");
    }
});

export default router;
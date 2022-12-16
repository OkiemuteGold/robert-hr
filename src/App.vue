<template>
    <div id="app">
        <TheHeader />

        <main class="site-main page-spacing">
            <ThePageBanner />

            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </main>

        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import ThePageBanner from "@/components/banners/ThePageBanner";
import TheFooter from "@/components/footer/TheFooter";

// import { mapActions } from "vuex";

export default {
    components: {
        TheHeader,
        ThePageBanner,
        TheFooter,
    },

    // methods: {
    //     ...mapActions(["setAllStallionHorses"])
    // },

    // mounted() {
    //     this.setAllStallionHorses();
    // },
};
</script>

<style>
@import url(./assets/css/utilities.css);

:root {
    --yellowLight: #ffc619;
    --yellowDark: #dd9218;
    --black0: #000;
    --black1: #111;
    --white: #fff;
    --transparentWhite: rgba(213, 213, 213, 0.4);
    --error: #ff3232;
}

#app,
body {
    font-family: "Work Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
}

/* page transition */
.fade-enter-active,
.fade-leave-active {
    -o-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.975);
}

.page-enter,
.page-leave-to {
    opacity: 0;
    -o-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
    -o-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
    opacity: 1;
    -o-transform: translateY(0);
    -ms-transform: translateY(0);
    -moz-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

/* header route-active */
.ow-navigation .nav.navbar-nav li.dropdown li > a:hover,
.ow-navigation .nav.navbar-nav li.dropdown li > a:focus,
.ow-navigation .nav.navbar-nav li.dropdown li > a.active {
    color: var(--black1);
}

.ow-navigation .nav.navbar-nav > li:hover > a,
.ow-navigation .nav.navbar-nav > li > a.active {
    background-color: transparent;
    color: var(--yellowLight);
}

a {
    text-decoration-skip-ink: auto;
    -o-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

img {
    max-width: 100%;
    height: auto;
}

/* section */
.section-header h2 {
    font-size: 36px;
    font-family: "MontserratUltraLight";
    font-weight: 500;
}

.latest-blog .blog-carousel .owl-carousel .owl-dots {
    margin-top: 40px !important;
}

.intro-about .intro-about-content a.contact-us:hover {
    color: var(--black1);
}

/* pagination */
.pagination li a {
    display: flex;
    justify-content: center;
    align-items: center;
    /* line-height: 43px; */
}

.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover {
    background: var(--yellowLight);
    color: var(--white);
}

.pagination li:not(.active) a:hover {
    background: var(--transparentWhite);
    color: var(--yellowLight);
}

.pagination:not(:disabled) a {
    cursor: pointer;
}

.pagination > .active > a {
    cursor: default;
}

.pagination:disabled a {
    cursor: not-allowed;
}

@media (max-width: 991px) {
    .ow-navigation .nav.navbar-nav li.dropdown li > a:hover,
    .ow-navigation .nav.navbar-nav li.dropdown li > a:focus,
    .ow-navigation .nav.navbar-nav li.dropdown li > a.active {
        color: var(--yellowLight);
    }
}
</style>

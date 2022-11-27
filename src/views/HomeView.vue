<template>
    <div class="home">
        <HomeIntro />
        <HomeAbout />
        <StudsPreview />
        <GalleryPreview />
        <SectionProcess />
        <AllTestimonials />
        <BlogHome />
    </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro";
import HomeAbout from "@/components/home/HomeAbout";
import StudsPreview from "@/components/global/StudsPreview";
import GalleryPreview from "@/components/global/GalleryPreview";
import SectionProcess from "@/components/global/SectionProcess";
import AllTestimonials from "@/components/testimonials/AllTestimonials";
import BlogHome from "@/components/blogs/BlogHome";

import "@/mixins";
import { mapActions } from "vuex";

export default {
    name: "HomeView",
    components: {
        HomeIntro,
        HomeAbout,
        StudsPreview,
        GalleryPreview,
        SectionProcess,
        AllTestimonials,
        BlogHome,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setAllStudItems"]),
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setAllStudItems();
    },
};
</script>

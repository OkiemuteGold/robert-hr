<template>
    <div class="blog">
        <BlogAll />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import BlogAll from "@/components/blogs/BlogAll";

export default {
    components: {
        BlogAll,
    },
    
    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Blog",
                prevLinkText: "Home",
                currentLinkText: "Blog",
                description: null,
                imageUrl: require("@/assets/images/feature-banner.jpg"),
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<style scoped>
</style>
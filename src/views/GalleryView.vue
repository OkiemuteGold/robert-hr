<template>
    <div
        class="
            gallery-section gallery-section-1
            container-fluid
            no-padding
            pt-70
            pb-70
        "
    >
        <!-- <div class="section-header">
            <h3>We preserve every moment at Yeguada Fernández Millares</h3>
        </div> -->

        <GalleryAll />
    </div>
</template>

<script>
import GalleryAll from "@/components/gallery/GalleryAll";

import "@/mixins";
import { mapActions } from "vuex";

export default {
    components: {
        GalleryAll,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Gallery",
                prevLinkText: "Home",
                currentLinkText: "Gallery",
                description: null,
                imageUrl: require("@/assets/images/gallery-banner.jpg"),
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
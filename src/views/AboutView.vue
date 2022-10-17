<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "About Roberto Horse Riding",
                prevLinkText: "Home",
                currentLinkText: "About Us",
                description: null,
                imageUrl: require("@/assets/images/about-banner.jpg"),
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

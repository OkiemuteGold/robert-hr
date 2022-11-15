<template>
    <div class="foals">
        <FoalsAll />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import FoalsAll from "@/components/studs/FoalsAll";

export default {
    components: {
        FoalsAll,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Foals",
                prevLinkText: "Home",
                currentLinkText: "Foals",
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
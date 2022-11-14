<template>
    <div class="stallion">
        <StallionAll />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import StallionAll from "@/components/studs/StallionAll";

export default {
    components: {
        StallionAll,
    },
    
    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Stallion",
                prevLinkText: "Home",
                currentLinkText: "Stallion",
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
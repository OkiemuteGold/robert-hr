<template>
    <div class="mares">
        <MaresAll />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import MaresAll from "@/components/studs/MaresAll";

export default {
    components: {
        MaresAll,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Mares",
                prevLinkText: "Home",
                currentLinkText: "Mares",
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
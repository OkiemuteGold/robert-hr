<template>
    <div class="fillies">
        <FilliesAll />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import FilliesAll from "@/components/studs/FilliesAll";

export default {
    components: {
        FilliesAll,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Fillies",
                prevLinkText: "Home",
                currentLinkText: "Fillies",
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
<template>
    <div class="about">
        <AboutIntro />
        <AllTeam />
        <SectionProcess />
        <AllPartners />
    </div>
</template>

<script>
import AboutIntro from "@/components/about/AboutIntro";
import AllTeam from "@/components/about/AllTeam";
import SectionProcess from "@/components/extra/SectionProcess";
import AllPartners from "@/components/about/AllPartners";

import "@/mixins";
import { mapActions } from "vuex";

export default {
    components: {
        AboutIntro,
        AllTeam,
        SectionProcess,
        AllPartners,
    },

    methods: {
        ...mapActions([
            "setCurrentPage",
            "setBannerSettings",
            // "setAllPartners",
        ]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "About the stud",
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
        // this.setAllPartners();
    },
};
</script>

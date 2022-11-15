<template>
    <div class="stallion">
        <StudDetails :horse="selectedHorse" />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions, mapState } from "vuex";
import StudDetails from "@/components/studs/StudDetails";

export default {
    components: {
        StudDetails,
    },

    data() {
        return {
            selectedHorse: null,
        };
    },

    computed: {
        ...mapState(["currentHorse"]),
    },

    methods: {
        ...mapActions([
            "setCurrentPage",
            "setBannerSettings",
            "setCurrentHorse",
            "setAllStallionHorses",
        ]),

        setBannerStyles() {
            this.setBannerSettings({
                title: this.selectedHorse.name,
                description: null,
                prevLinkText: null,
                currentLinkText: null,
                buttonUrl: null,
                imageUrl: null,
            });
        },
    },

    beforeMount() {
        this.setCurrentHorse(this.$route.params.id);
        if (this.currentHorse) {
            this.selectedHorse = this.currentHorse;
        }
    },

    created() {
        this.setAllStallionHorses();
    },

    mounted() {
        // console.log(
        //     this.$route.params.id,
        //     this.$router.history.current.name,
        //     this.selectedHorse
        // );

        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<style scoped>
</style>
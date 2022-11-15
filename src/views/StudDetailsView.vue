<template>
    <div class="stallion">
        <StudDetails :horse="selectedHorse" :category="category" />
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
            category: this.$route.query.category,
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
        this.setAllStallionHorses(this.$route.query.category);
    },

    mounted() {
        console.log(
            this.$route.query.category,
            this.$route.params.id,
            this.$router.history.current.name,
            this.selectedHorse
        );

        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<style scoped>
</style>
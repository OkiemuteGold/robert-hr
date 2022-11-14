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

    created() {
        this.setCurrentHorse(this.$route.params.id);
    },

    methods: {
        ...mapActions([
            "setCurrentPage",
            "setBannerSettings",
            "setCurrentHorse",
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

        getCurrentStallionHorse() {
            if (this.currentHorse) {
                this.selectedHorse = this.currentHorse[0];
            }
        },
    },

    beforeMount() {
        this.getCurrentStallionHorse();
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<style scoped>
</style>
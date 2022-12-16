<template>
    <div class="horses-container pt-100 pb-100">
        <div class="info-section container-fluid no-padding">
            <div class="container">
                <div class="row mb-80">
                    <div class="col-md-7 col-sm-12 col-xs-12">
                        <div class="section-header mb-30 left-header">
                            <h2 class="capitalize mt-0 mb-0">
                                Origin of our Fillies
                            </h2>
                        </div>

                        <div class="intro-about-content text-left">
                            <p>
                                The base of our mares combines the best
                                qualities of the pure Arabian breed.
                                Morphologically very fixed characteristics,
                                balanced proportions, strong extremities and
                                proceeding from the most spectacular stallions.
                                Castropol, one of the most outstanding stallions
                                of the Yeguada Ybarra is the father of our
                                mares.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 col-xs-12">
                        <div class="text-center">
                            <img
                                src="@/assets/images/mares/mares-image.jpg"
                                width="350"
                                height="250"
                                alt="fillies intro image"
                            />
                        </div>
                    </div>
                </div>

                <div class="section-header mb-10 text-left">
                    <h2 class="mt-0 mb-0">All Fillies Horses</h2>
                </div>

                <div
                    class="all-horses-wrapper row"
                    v-if="filliesHorses && filliesHorses.length > 0"
                >
                    <div
                        v-for="horse in filliesHorses"
                        :key="horse.id"
                        class="col-md-4 col-sm-6 col-xs-12 mt-40"
                    >
                        <router-link
                            :to="{
                                name: 'StudDetails',
                                params: { id: horse.id },
                                query: { category: studName },
                            }"
                            class="image"
                        >
                            <img
                                :src="horse.slideImages[0].src"
                                :alt="horse.slideImages[0].alt"
                            />
                        </router-link>
                        <div class="info">
                            <h3>
                                <router-link
                                    :to="{
                                        name: 'StudDetails',
                                        params: { id: horse.id },
                                        query: { category: studName },
                                    }"
                                >
                                    {{ horse.name }}
                                </router-link>
                            </h3>

                            <p>{{ horse.briefDetails.dateOfBirth }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            filliesHorses: null,
            studName: "fillies",
        };
    },

    computed: {
        ...mapState(["allStallionHorses"]),
    },

    methods: {
        ...mapActions(["setAllStallionHorses"]),
    },

    mounted() {
        this.setAllStallionHorses(this.studName);

        if (this.allStallionHorses) {
            this.filliesHorses = this.allStallionHorses;
        }
    },
};
</script>

<style scoped>
@import url(../../assets/css/all-studs.css);
</style>
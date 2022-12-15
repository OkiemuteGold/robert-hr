<template>
    <div class="horses-container pt-100 pb-100">
        <div class="info-section feature-section container-fluid no-padding">
            <div class="container">
                <div class="section-header mb-10 text-left">
                    <h2 class="mt-0 mb-0">All Stallion Horses</h2>
                </div>

                <div
                    class="all-horses-wrapper row"
                    v-if="stallionHorses && stallionHorses.length > 0"
                >
                    <div
                        v-for="horse in stallionHorses"
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
// import stallion from "@/api/stallion";

export default {
    data() {
        return {
            stallionHorses: null,
            studName: "stallion",
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
            this.stallionHorses = this.allStallionHorses;
        }
    },
};
</script>

<style scoped>
@import url(../../assets/css/all-studs.css);
</style>
<template>
    <div class="studs-view pt-100 pb-100">
        <div class="intro-about info-section container-fluid no-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-header mb-10 left-header">
                            <h2 class="mt-0 mb-0">The Studs</h2>
                        </div>

                        <div class="intro-about-content text-left">
                            <p class="mt-0 mb-0">
                                Yeguada Fernández Millares boasts of purebred
                                Arabian and Hispano-Arabian horses that are well
                                trained and healthy. Through our studs farm, we
                                are bring horses with class, nobles and beauty
                                combined with functionality and quality of
                                balanced movements.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="row all-studs mb-70"
                    v-if="studs && studs.length > 0"
                >
                    <div
                        v-for="(item, index) in studs"
                        :key="index"
                        class="col-md-3 col-sm-6 col-xs-12 mt-30"
                    >
                        <router-link
                            :to="{
                                name: item.name,
                            }"
                        >
                            <div class="image">
                                <img :src="item.url" :alt="item.name" />
                            </div>
                            <div class="info">
                                <h3 class="capitalize text-left">
                                    {{ item.name }}
                                </h3>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="container characteristics">
                <div class="row mb-60">
                    <div class="col-xs-12">
                        <div class="section-header mb-40 left-header">
                            <h2 class="mt-0 mb-0">
                                Characteristics of the Yeguada Fernández
                                Millares
                            </h2>
                        </div>

                        <div class="intro-about-content text-left">
                            <p class="mt-0 mb-0">
                                To get <span>the best Arabian horses</span>, our
                                selection criteria have been based on three
                                fundamental characteristics:
                                <span>morphology, functionality and breed</span
                                >.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row mb-60">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="section-header left-header">
                            <h4>Morphology</h4>
                        </div>

                        <div class="intro-about-content text-left">
                            <p>
                                The influence of the Yeguada Ybarra in our
                                beginning is manifest. After several visits to
                                "La Cascajera" in Seville, the couple decides to
                                acquire a batch of mares from the most
                                outstanding mares and a stallion Kirov son of
                                Vigia, one of the most important horses of the
                                stud farm.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div>
                            <img
                                src="@/assets/images/slider-1.jpg"
                                alt="about intro image"
                            />
                        </div>
                    </div>
                </div>

                <div class="row mb-60">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div>
                            <img
                                src="@/assets/images/slider-1.jpg"
                                alt="about intro image"
                            />
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="section-header left-header">
                            <h4>Functionality</h4>
                        </div>

                        <div class="intro-about-content text-left">
                            <p>
                                The influence of the Yeguada Ybarra in our
                                beginning is manifest. After several visits to
                                "La Cascajera" in Seville, the couple decides to
                                acquire a batch of mares from the most
                                outstanding mares and a stallion Kirov son of
                                Vigia, one of the most important horses of the
                                stud farm.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="section-header left-header">
                            <h4>Breed</h4>
                        </div>

                        <div class="intro-about-content text-left">
                            <p>
                                The influence of the Yeguada Ybarra in our
                                beginning is manifest. After several visits to
                                "La Cascajera" in Seville, the couple decides to
                                acquire a batch of mares from the most
                                outstanding mares and a stallion Kirov son of
                                Vigia, one of the most important horses of the
                                stud farm.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div>
                            <img
                                src="@/assets/images/slider-1.jpg"
                                alt="about intro image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/mixins";
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["getAllStudItems"]),

        studs() {
            let studs = [];
            if (this.getAllStudItems) {
                studs = this.getAllStudItems;
            }
            return studs;
        },
    },

    methods: {
        ...mapActions([
            "setCurrentPage",
            "setBannerSettings",
            "setAllStudItems",
        ]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Studs",
                prevLinkText: "Home",
                currentLinkText: "Studs",
                description: null,
                imageUrl: require("@/assets/images/feature-banner.jpg"),
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
        this.setAllStudItems();
    },
};
</script>

<style scoped>
.all-studs a {
    color: var(--black1);
    text-decoration: none;
}

.all-studs a:hover h3 {
    color: var(--yellowDark);
}

.image img {
    height: 200px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

h4 {
    font-weight: 400;
    color: var(--black1);
}

.info h3 {
    font-weight: 400;
    -o-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}
</style>
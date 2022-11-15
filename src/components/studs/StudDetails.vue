<template>
    <div class="horse-details" v-if="currentHorse">
        <div class="info-section feature-section container-fluid no-padding">
            <div class="padding-70"></div>

            <div class="container">
                <div class="back-to-previous">
                    <button
                        @click="goBack"
                        :title="'Back to ' + category + ' horses'"
                    >
                        <img
                            src="@/assets/images/back-icon.png"
                            alt="back icon"
                            height="14"
                            width="16"
                        />
                        Back to {{ category }} horses
                    </button>
                </div>

                <div class="horse-details-container">
                    <div class="image">
                        <carousel
                            :items="1"
                            :autoplay="false"
                            :nav="false"
                            :dots="false"
                            :margin="30"
                            :responsive="{
                                0: { items: 1, autoplay: false },
                            }"
                            class="testimonial-carousel"
                        >
                            <img
                                v-for="(
                                    image, index
                                ) in currentHorse.slideImages"
                                :key="index"
                                :src="image.src"
                                :alt="image.alt"
                                :aria-label="image.alt"
                            />

                            <template slot="prev">
                                <span hidden ref="prev" class="prev">prev</span>
                            </template>
                            <template slot="next">
                                <span hidden ref="next" class="next">next</span>
                            </template>
                        </carousel>

                        <div class="custom-nav">
                            <a class="btn prev" @click="$refs.prev.click()">
                                <i class="fa fa-angle-left" aria-hidden="true">
                                </i>
                            </a>
                            <a class="btn next" @click="$refs.next.click()">
                                <i class="fa fa-angle-right" aria-hidden="true">
                                </i>
                            </a>
                        </div>
                    </div>

                    <div class="info">
                        <h3>{{ currentHorse.name }}</h3>

                        <div class="brief-details">
                            <p><span>Breed:</span> {{ currentHorse.breed }}</p>
                            <p>
                                <span>Date of Birth:</span>
                                {{ currentHorse.briefDetails.dateOfBirth }}
                            </p>
                            <p>
                                <span>Coat:</span>
                                {{ currentHorse.briefDetails.coat }}
                            </p>
                            <p>
                                <span>Father:</span>
                                {{ currentHorse.briefDetails.father }}
                            </p>
                            <p>
                                <span>Mother:</span>
                                {{ currentHorse.briefDetails.mother }}
                            </p>
                            <p>
                                <span>Cross</span>
                                {{ currentHorse.briefDetails.cross }}
                            </p>
                        </div>

                        <div class="brief-description">
                            <p
                                v-if="
                                    currentHorse.horseDescription.description1
                                "
                            >
                                <span>{{ currentHorse.name }}</span> is a
                                {{ currentHorse.horseDescription.description1 }}
                            </p>
                            <p
                                v-if="
                                    currentHorse.horseDescription.description2
                                "
                            >
                                {{ currentHorse.horseDescription.description2 }}
                            </p>
                            <p
                                v-if="
                                    currentHorse.horseDescription.description3
                                "
                            >
                                {{ currentHorse.horseDescription.description3 }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="padding-70"></div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    props: ["horse", "category"],
    components: { carousel },

    data() {
        return {
            currentHorse: this.horse,
        };
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },

    // mounted() {
    //     console.log(this.horse);
    // },
};
</script>

<style scoped>
.back-to-previous {
    margin-bottom: 40px;
}

.back-to-previous button {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    text-transform: capitalize;
}

.back-to-previous button img {
    margin-right: 6px;
    vertical-align: -webkit-baseline-middle;
    vertical-align: middle;
}

.horse-details-container {
    display: flex;
    justify-content: space-between;
}

.horse-details-container .image {
    width: 55%;
}

.horse-details-container .info {
    width: 45%;
    padding: 10px 10px 10px 50px;
}

.horse-details-container .info h3 {
    margin-top: 0;
    margin-bottom: 15px;
}

.horse-details-container .info p {
    font-size: 15px;
}

.horse-details-container .info p span {
    font-weight: 500;
}

.brief-details {
    margin-bottom: 20px;
}

.brief-details p:last-child,
.brief-description p {
    margin-bottom: 0;
}

.brief-description p:nth-child(2) {
    margin-top: 20px;
    margin-bottom: 20px;
}

@import url(../../assets/css/custom-nav.css);
</style>
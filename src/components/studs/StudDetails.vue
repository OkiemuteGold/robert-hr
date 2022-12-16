<template>
    <div class="horse-details pt-50 pb-100" v-if="currentHorse">
        <div class="info-section feature-section container-fluid no-padding">
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

                <div class="row horse-details-container">
                    <div class="col-xs-12 col-sm-6 col-md-7 image">
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
                            <!-- :src="image.src" -->
                            <img
                                v-for="(
                                    image, index
                                ) in currentHorse.slideImages"
                                :key="index"
                                :src="currentImage"
                                :alt="image.alt"
                            />

                            <!-- <template slot="prev">
                                <span hidden ref="prev" class="prev">prev</span>
                            </template>
                            <template slot="next">
                                <span hidden ref="next" class="next">next</span>
                            </template> -->
                        </carousel>

                        <div class="custom-nav">
                            <!-- @click="$refs.prev.click()" -->
                            <a
                                class="btn prev"
                                @click="prevImage(activeImage)"
                                aria-label="slide to previous image"
                            >
                                <i class="fa fa-angle-left" aria-hidden="true">
                                </i>
                            </a>
                            <!-- @click="$refs.next.click()" -->
                            <a
                                class="btn next"
                                @click="nextImage(activeImage)"
                                aria-label="slide to next image"
                            >
                                <i class="fa fa-angle-right" aria-hidden="true">
                                </i>
                            </a>
                        </div>

                        <div class="thumbnails mb-20">
                            <div
                                v-for="(
                                    image, index
                                ) in currentHorse.slideImages"
                                :key="index"
                                :class="[
                                    'thumbnail-image',
                                    activeImage == index ? 'active' : '',
                                ]"
                                @click="activateImage(index)"
                            >
                                <img
                                    :src="image.src"
                                    :alt="image.alt"
                                    :aria-label="`slide to ${image.alt}`"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-5 info">
                        <!-- <h3 class="uppercase mt-0 mb-20">
                            {{ currentHorse.name }}
                        </h3> -->

                        <div class="brief-details">
                            <p class="capitalize">
                                <span>Breed:</span> {{ currentHorse.breed }}
                            </p>
                            <p class="capitalize">
                                <span>Date of Birth:</span>
                                {{ currentHorse.briefDetails.dateOfBirth }}
                            </p>
                            <p class="capitalize">
                                <span>Height:</span>
                                {{ currentHorse.briefDetails.height }}
                            </p>
                            <p class="capitalize">
                                <span>Layer</span>
                                {{ currentHorse.briefDetails.layer }}
                            </p>
                            <p>
                                <span>Father:</span>
                                {{ currentHorse.briefDetails.father }}
                            </p>
                            <p>
                                <span>Mother:</span>
                                {{ currentHorse.briefDetails.mother }}
                            </p>
                        </div>

                        <div
                            class="brief-description"
                            v-if="currentHorse.horseDescription"
                        >
                            <p
                                v-for="(
                                    description, index
                                ) in currentHorse.horseDescription"
                                :key="index"
                            >
                                {{ description }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row pt-50">
                    <div class="col-xs-12 genealogy">
                        <h2 class="capitalize mt-0 mb-30">Genealogy</h2>

                        <div class="image">
                            <img
                                :src="currentHorse.historyImage"
                                :alt="currentHorse.name + ' genealogy'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    props: ["horse", "category"],

    components: { carousel },

    computed: {
        // currentImage gets called whenever activeImage changes
        // and is the reason why we don't have to worry about the
        // big image getting updated
        currentImage() {
            return this.currentHorse.slideImages[this.activeImage].src;
        },
    },

    data() {
        return {
            currentHorse: this.horse,
            activeImage: 0,
        };
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        // Go forward on the images array
        // or go at the first image if you can't go forward
        nextImage() {
            let active = this.activeImage + 1;

            if (active >= this.currentHorse.slideImages.length) {
                active = 0;
            }
            this.activateImage(active);
        },

        // Go backwards on the images array
        // or go at the last image
        prevImage() {
            let active = this.activeImage - 1;

            if (active < 0) {
                active = this.currentHorse.slideImages.length - 1;
            }
            this.activateImage(active);
        },

        activateImage(imageIndex) {
            this.activeImage = imageIndex;
            // console.log(this.activeImage, imageIndex);
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

/* .horse-details-container {
    display: flex;
    justify-content: space-between;
}

.horse-details-container .image {
    width: 55%;
} */

.custom-nav {
    position: relative;
    top: -50px;
    right: 8px;
    margin-top: 0;
    z-index: 2;
}

.custom-nav a {
    background: var(--transparentWhite);
    color: var(--black0);
    border-color: var(--white);
}

img {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.testimonial-carousel img {
    height: 480px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 60% 20%;
    object-position: 60% 20%;
}

.thumbnails {
    display: flex;
    overflow-x: auto;
}

.thumbnails::-webkit-scrollbar {
    width: 10px;
}

.thumbnail-image {
    position: relative;
    height: 105px;
    min-width: 160px;
    cursor: pointer;
}

.thumbnail-image img {
    height: 100%;
    width: 100%;
    -o-object-position: 50% 15%;
    object-position: 50% 15%;
}

.thumbnail-image:not(:last-child) {
    margin-right: 15px;
}

.thumbnail-image::after {
    -o-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

.thumbnail-image.active::after,
.thumbnail-image::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    margin: auto;
}

.thumbnail-image::after {
    background: rgba(0, 0, 0, 0.4);
}

.thumbnail-image.active::after {
    background: none;
}

/* .horse-details-container .info {
    width: 45%;
    padding: 0px 10px 10px 50px;
} */

.horse-details-container .info h3 {
    font-size: 26px;
}

.horse-details-container .info p {
    font-size: 15px;
}

.brief-details {
    margin-bottom: 30px;
}

.brief-details p span {
    font-weight: 500;
}

.brief-details p:last-child,
.brief-description p {
    margin-bottom: 0;
}

.brief-details p + p {
    margin-top: 15px;
}

.brief-description p + p {
    margin-top: 20px;
}

@import url(../../assets/css/custom-nav.css);
</style>


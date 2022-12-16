<template>
    <div class="gallery-section container-fluid no-padding pt-80 pb-70">
        <div class="container">
            <div class="section-header">
                <h3>From Our Training Center</h3>
            </div>

            <div class="row" v-if="galleryImages">
                <div
                    class="col-md-4 col-sm-6 col-xs-6"
                    v-for="(item, index) in galleryImages"
                    :key="index"
                >
                    <div class="gallery-box">
                        <img :src="item.imageUrl" :alt="item.name" />

                        <div class="gallery-box-hover">
                            <p>
                                {{ item.description }}
                            </p>
                        </div>
                        <div class="gallery-content">
                            <span class="inner"
                                ><i class="fa fa-link" aria-hidden="true"></i
                            ></span>
                            <h3>{{ item.name }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import gallery from "@/api/gallery";
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["getAllGalleryImages"]),

        galleryImages() {
            let images;
            if (
                this.getAllGalleryImages &&
                this.getAllGalleryImages.length > 0
            ) {
                images = this.getAllGalleryImages.slice(0, 6);
            }
            return images;
        },
    },

    methods: {
        ...mapActions(["setAllGalleryImages"]),
    },

    mounted() {
        this.setAllGalleryImages();
    },
};
</script>

<style scoped>
.gallery-content .inner {
    position: relative;
    width: 71px;
    height: 71px;
    display: inline-block;
    font-size: 18px;
    background-color: var(--yellowLight);
    color: var(--black1);
    border-radius: 100%;
    margin-top: -35px;
    line-height: 71px;
}

.gallery-box {
    height: 280px;
}

.gallery-box img {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.gallery-section .gallery-box-hover p {
    margin-bottom: 0;
}

@media (max-width: 1200px) {
    .gallery-box-hover {
        top: 16%;
    }
}
</style>
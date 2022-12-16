<template>
    <div class="gallery-section container pb-50">
        <div class="row" v-if="allGalleryItems && allGalleryItems.length">
            <!-- <div
                class="col-md-4 col-sm-6 col-xs-6"
                v-for="(item, index) in allGalleryItems"
                :key="index"
            >
            </div> -->

            <!-- :cols="3" :gutter="30" -->
            <masonry
                :cols="{ default: 3, 991: 2, 541: 1, 475: 1 }"
                :gutter="{ default: '30px', 700: '15px' }"
            >
                <div v-for="(item, index) in allGalleryItems" :key="index">
                    <div class="gallery-box">
                        <img
                            :src="item.imageUrl"
                            :alt="item.name"
                            width="373"
                            height="273"
                        />
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
            </masonry>
        </div>
    </div>
</template>

<script>
// import gallery from "@/api/gallery";
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState(["galleryImages"]),
    },

    created() {
        this.setAllGalleryImages();
    },

    data() {
        return {
            allGalleryItems: null,
        };
    },

    methods: {
        ...mapActions(["setAllGalleryImages"]),
    },

    mounted() {
        if (this.galleryImages) {
            this.allGalleryItems = this.galleryImages;
        }
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

.gallery-section .gallery-box-hover p {
    margin-bottom: 0;
}

@media (max-width: 1200px) {
    .gallery-box-hover {
        top: 16%;
    }
}
</style>
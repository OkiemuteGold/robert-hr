<template>
    <div class="gallery-section container-fluid no-padding">
        <div class="padding-70"></div>

        <div class="container">
            <div class="section-header">
                <h3>From Our Training Center</h3>
            </div>

            <div class="row" v-if="allGalleryItems && allGalleryItems.length">
                <div
                    class="col-md-4 col-sm-6 col-xs-6"
                    v-for="(item, index) in allGalleryItems"
                    :key="index"
                >
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
            </div>
        </div>

        <div class="padding-70"></div>
    </div>
</template>

<script>
import gallery from "@/api/gallery";

export default {
    data() {
        return {
            allGalleryItems: null,
        };
    },

    mounted() {
        this.allGalleryItems = gallery;
    },
};
</script>

<style scoped>
.gallery-content .inner {
    background-color: #ffc619;
    border-radius: 100%;
    color: var(--black1);
    display: inline-block;
    font-size: 18px;
    width: 71px;
    height: 71px;
    margin-top: -35px;
    line-height: 71px;
    position: relative;
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
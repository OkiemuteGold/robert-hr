<template>
    <div class="gallery-section container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="section-header">
                <h5>From Our Gallery</h5>
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
                            <a href="gallery.html"
                                ><i class="fa fa-link" aria-hidden="true"></i
                            ></a>
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
            allGalleryItems: gallery,
        };
    },
};
</script>

<style scoped>
</style>
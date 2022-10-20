<template>
    <div class="gallery-section gallery-section-1 container-fluid no-padding">
        <GalleryPreview />

        <div class="container">
            <nav class="ow-pagination">
                <ul class="pagination">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                        <a href="#"
                            ><i
                                class="fa fa-angle-double-right"
                                aria-hidden="true"
                            ></i
                        ></a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="padding-70"></div>
    </div>
</template>

<script>
import GalleryPreview from "@/components/global/GalleryPreview";

import "@/mixins";
import { mapActions } from "vuex";

export default {
    components: {
        GalleryPreview,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Gallery",
                prevLinkText: "Home",
                currentLinkText: "Gallery",
                description: null,
                imageUrl: require("@/assets/images/gallery-banner.jpg"),
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<style scoped>
.ow-pagination {
    margin-top: -20px;
    margin-bottom: 0;
}

.pagination {
    margin-top: 0;
}
</style>
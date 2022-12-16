<template>
    <div class="gallery-section container">
        <div class="row">
            <div class="col-xs-12">
                <div class="category-buttons pb-40" v-if="allCategories">
                    <button
                        class="button active-button"
                        @click.prevent="
                            toggleCategory($event, (categoryCode = 'all'))
                        "
                        aria-label="all"
                    >
                        all
                    </button>
                    <button
                        v-for="(category, index) in allCategories"
                        :key="index"
                        class="button"
                        @click.prevent="toggleCategory($event, category)"
                        :aria-label="category"
                    >
                        {{ category }}
                    </button>
                </div>

                <div v-if="allCategories && !isLoading">
                    <!-- :cols="3" :gutter="30" -->
                    <masonry
                        :cols="{ default: 3, 991: 2, 541: 1, 475: 1 }"
                        :gutter="{ default: '30px', 700: '15px' }"
                    >
                        <div
                            v-for="(item, index) in galleryImages"
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
                                        ><i
                                            class="fa fa-link"
                                            aria-hidden="true"
                                        ></i
                                    ></span>
                                    <h3>{{ item.name }}</h3>
                                </div>
                            </div>
                        </div>
                    </masonry>
                </div>

                <LoadingComponent v-else />
            </div>
        </div>

        <div class="pagination-wrapper">
            <nav
                class="ow-pagination"
                v-if="
                    galleryImages && isCategoryAll && totalImageAll > pageSize
                "
            >
                <MyPagination
                    v-model="page"
                    :records="totalImageAll"
                    :per-page="pageSize"
                    @paginate="paginateAllImages"
                />
            </nav>

            <nav
                class="ow-pagination"
                v-if="
                    galleryImages &&
                    !isCategoryAll &&
                    totalImageCategory > pageSize
                "
            >
                <MyPagination
                    v-model="page"
                    :records="totalImageCategory"
                    :per-page="pageSize"
                    @paginate="paginateCategoryImages"
                />
            </nav>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "@/mixins";
import LoadingComponent from "@/components/extra/LoadingComponent.vue";

export default {
    components: {
        LoadingComponent,
    },

    computed: {
        ...mapGetters(["getAllGalleryImages"]),

        allCategories() {
            // let categories = new Set();
            let categories = [];

            if (this.allGalleryImages) {
                this.allGalleryImages.forEach((image) => {
                    // categories.add(image.categoryCode);
                    let code = image.categoryCode;

                    // if (!categories.includes(code)) {
                    //     categories.push(code);
                    // }

                    if (categories.indexOf(code) === -1) {
                        categories.push(code);
                    }
                });
            }

            return categories;
        },

        allGalleryImages() {
            let images;
            if (
                this.getAllGalleryImages &&
                this.getAllGalleryImages.length > 0
            ) {
                images = this.getAllGalleryImages;
            }
            return images;
        },
    },

    data() {
        return {
            galleryImages: [],
            isLoading: false,
            isCategoryAll: true,
            categoryCode: null,

            // ------ pagination ------
            page: 1,
            pageSize: 6,
            totalImageAll: null,
            totalImageCategory: null,
        };
    },

    methods: {
        ...mapActions(["setAllGalleryImages"]),

        toggleCategory(event, categoryCode) {
            const categoryButton = event.target;
            const allCategoryButtons = document.querySelectorAll(
                ".category-buttons .button"
            );

            if (categoryButton.classList.contains("active-button")) {
                return;
            } else {
                allCategoryButtons.forEach((button) => {
                    button.classList.remove("active-button");
                });
                categoryButton.classList.add("active-button");

                if (categoryCode === "all") {
                    this.isCategoryAll = true;
                    this.page = 1;
                    this.pageSize = 6;

                    this.paginateAllImages();
                } else {
                    this.categoryCode = categoryCode;
                    this.isCategoryAll = false;
                    this.page = 1;
                    this.pageSize = 2;

                    this.paginateCategoryImages();
                }
            }

            // console.log(
            //     event,
            //     categoryButton,
            //     categoryCode,
            //     this.allGalleryImages
            // );
        },

        // ------ pagination ------
        getCurrentImages() {
            this.isLoading = true;

            setTimeout(() => {
                this.isLoading = false;
            }, 500);

            return (this.galleryImages = this.galleryImages.slice(
                (this.page - 1) * this.pageSize,
                this.page * this.pageSize
            ));
        },

        paginateAllImages() {
            this.galleryImages = this.allGalleryImages;
            this.totalImageAll = this.galleryImages.length;
            this.getCurrentImages();
        },

        paginateCategoryImages() {
            this.galleryImages = this.allGalleryImages.filter((image) => {
                return image.categoryCode === this.categoryCode;
            });

            this.totalImageCategory = this.galleryImages.length;
            this.getCurrentImages();
        },
    },

    beforeMount() {
        this.setAllGalleryImages();
    },

    mounted() {
        if (this.allGalleryImages) {
            this.paginateAllImages();
        }
    },
};
</script>

<style scoped>
.category-buttons {
    width: 100%;
    display: -ms-grid;
    display: -moz-grid;
    display: grid;
    grid-auto-flow: column;
    gap: 20px 25px;
    overflow-x: auto;
}

/* .category-buttons::-webkit-scrollbar {
    width: 8px;
    display: none;
} */

.category-buttons .button {
    min-width: max-content;
    display: inline-block;
    font-family: "Work Sans", sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 13px 30px;
    color: var(--black1);
    outline: none;
    border: 1px solid transparent;
    line-height: 24px;
    letter-spacing: 1.95px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
    cursor: pointer;
}

.category-buttons .button:hover {
    color: var(--yellowDark);
    border-color: var(--yellowLight);
}

.category-buttons .button.active-button {
    font-weight: 600;
    background-color: var(--yellowLight);
    color: var(--white);
}

/* .category-buttons .button.active-button:hover {
    color: var(--white);
} */

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

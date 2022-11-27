<template>
    <div id="latest-blog" class="latest-blog container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="row">
                <div class="section-header">
                    <h5>Latest Updates</h5>
                    <h3>From Our Blog</h3>
                </div>

                <div v-if="allBlogPosts && allBlogPosts.length > 0">
                    <carousel
                        :autoplay="true"
                        :nav="false"
                        :dots="true"
                        :margin="30"
                        :responsive="{
                            0: { items: 1 },
                            992: { items: 2 },
                        }"
                        class="blog-carousel"
                    >
                        <div
                            v-for="(blog, index) in allBlogPosts"
                            :key="index"
                            class="col-md-12 col-sm-12 col-xs-12"
                        >
                            <article class="type-post">
                                <div class="entry-cover">
                                    <a :href="blog.link" :title="blog.title">
                                        <img
                                            :alt="blog.title"
                                            :src="blog.imageUrl"
                                            width="570"
                                            height="380"
                                        />
                                    </a>
                                    <div class="latest-blog-content">
                                        <span>{{ blog.tag }}</span>

                                        <h3 class="entry-title">
                                            <a
                                                :title="blog.title"
                                                href="blog-post.html"
                                                >{{ blog.title }}</a
                                            >
                                        </h3>
                                        <div class="post-date">
                                            <i
                                                class="fa fa-calendar"
                                                aria-hidden="true"
                                            ></i>
                                            {{ blog.date }}
                                        </div>
                                        <div class="entry-content">
                                            <p>
                                                {{ blog.description }}
                                            </p>
                                        </div>
                                        <a
                                            aria-label="Read More"
                                            :href="blog.link"
                                            class="read-more"
                                            >Read More</a
                                        >
                                    </div>
                                </div>
                            </article>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>

        <div class="section-padding"></div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { carousel },

    computed: {
        ...mapGetters(["getAllBlogs"]),

        allBlogPosts() {
            let blogs = null;

            if (this.getAllBlogs) {
                blogs = this.getAllBlogs;
            }
            return blogs;
        },
    },

    created() {
        this.setAllBlogs();
    },

    methods: {
        ...mapActions(["setAllBlogs"]),
    },
};
</script>

<style scoped>
.latest-blog .owl-carousel .owl-item img {
    min-height: 300px;
    -o-object-fit: cover;
    object-fit: cover;
}

.latest-blog .entry-cover::before {
    background: rgba(247, 247, 247, 0.975);
}

.latest-blog .latest-blog-content {
    padding-right: 10px;
}

.latest-blog .latest-blog-content h3.entry-title {
    font-family: "montserratlight";
}

.latest-blog .latest-blog-content a.read-more {
    text-decoration: underline;
}

.latest-blog-content span {
    display: block;
    width: fit-content;
}

@media (max-width: 479px) {
    .latest-blog .latest-blog-content {
        left: 48%;
    }

    .latest-blog .latest-blog-content h3.entry-title {
        font-size: 15px;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .latest-blog .latest-blog-content .entry-content p {
        margin-bottom: 15px;
    }

    .latest-blog .latest-blog-content .post-date {
        margin-bottom: 20px;
    }
}
</style>
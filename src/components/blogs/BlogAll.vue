<template>
    <div
        id="latest-blog"
        class="latest-blog blog-section container-fluid no-padding"
    >
        <div class="section-padding"></div>

        <div class="container">
            <div
                class="content-area col-md-8 col-sm-7 col-xs-12"
                v-if="allBlogPosts && allBlogPosts.length > 0"
            >
                <article
                    class="type-post"
                    v-for="(blog, index) in allBlogPosts"
                    :key="index"
                >
                    <div class="entry-cover">
                        <a :href="blog.link" :title="blog.title">
                            <img
                                :alt="blog.title"
                                :src="blog.imageUrl"
                                width="810"
                                height="405"
                            />
                        </a>

                        <div class="latest-blog-content">
                            <span>{{ blog.tag }}</span>

                            <h3 class="entry-title">
                                <a :title="blog.title" href="blog-post.html">{{
                                    blog.title
                                }}</a>
                            </h3>

                            <div class="post-date">
                                <i class="fa fa-calendar" aria-hidden="true"></i
                                >{{ blog.date }}
                            </div>

                            <div class="entry-meta">
                                <a title="Stevan Smith" href="#"
                                    ><i
                                        class="fa fa-heart-o"
                                        aria-hidden="true"
                                    ></i
                                    >Likes: {{ blog.totalLikes }}</a
                                >
                                <a title="Comments" href="#"
                                    ><i class="fa fa-commenting-o"></i>Comments:
                                    {{ blog.totalComments }}</a
                                >
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

            <div class="col-md-4 col-sm-5 col-xs-12 widget-area">
                <aside class="widget widget-search">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search . . ."
                        />
                        <span class="input-group-btn">
                            <button
                                class="btn btn-search"
                                title="Search"
                                type="button"
                            >
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                </aside>

                <aside class="widget widget-categories">
                    <h3 class="widget-title">Post Categories</h3>
                    <ul>
                        <li>
                            <a href="#" title="Architecture"
                                >Architecture<span class="pull-right"
                                    >09</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="Interior Design"
                                >Interior Design<span class="pull-right"
                                    >10</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="Construction"
                                >Construction<span class="pull-right"
                                    >07</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="Plumbing"
                                >Plumbing<span class="pull-right">11</span></a
                            >
                        </li>
                        <li>
                            <a href="#" title="Building"
                                >Building<span class="pull-right">13</span></a
                            >
                        </li>
                        <li>
                            <a href="#" title="Fancing"
                                >Fancing<span class="pull-right">07</span></a
                            >
                        </li>
                    </ul>
                </aside>

                <aside class="widget widget-latestposts">
                    <h3 class="widget-title">Recent Post</h3>
                    <div class="latest-content">
                        <a href="blog-post.html" title="Recent Posts"
                            ><i
                                ><img
                                    width="82"
                                    height="82"
                                    alt="thumb"
                                    src="@/assets/images/latest-post-1.jpg" /></i
                        ></a>
                        <h3>
                            <a
                                title="If not for the courage of the fearless crew the Minnow"
                                href="blog-post.html"
                                >If not for the courage of the fearless crew the
                                Minnow
                            </a>
                        </h3>
                        <p>09 jul 2015</p>
                    </div>

                    <div class="latest-content">
                        <a href="blog-post.html" title="Recent Posts"
                            ><i
                                ><img
                                    width="82"
                                    height="82"
                                    alt="thumb"
                                    src="@/assets/images/latest-post-2.jpg" /></i
                        ></a>
                        <h3>
                            <a
                                title="That this group would a way we all Brady bunch"
                                href="blog-post.html"
                                >That this group would a way we all Brady
                                bunch</a
                            >
                        </h3>
                        <p>14 Aug 2015</p>
                    </div>

                    <div class="latest-content">
                        <a href="blog-post.html" title="Recent Posts"
                            ><i
                                ><img
                                    width="82"
                                    height="82"
                                    alt="thumb"
                                    src="@/assets/images/latest-post-3.jpg" /></i
                        ></a>
                        <h3>
                            <a
                                title="Travelled down the road and back again here"
                                href="blog-post.html"
                                >Travelled down the road and back again here</a
                            >
                        </h3>
                        <p>23 Sep 2015</p>
                    </div>
                </aside>

                <aside class="widget widget-categories">
                    <h3 class="widget-title">Archives</h3>

                    <ul>
                        <li>
                            <a href="#" title="December 2015"
                                >December 2015<span class="pull-right"
                                    >10</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="November 2015"
                                >November 2015<span class="pull-right"
                                    >11</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="October 2015"
                                >October 2015<span class="pull-right"
                                    >18</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="September 2015"
                                >September 2015<span class="pull-right"
                                    >09</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="August 2015"
                                >August 2015<span class="pull-right"
                                    >16</span
                                ></a
                            >
                        </li>
                        <li>
                            <a href="#" title="July 2015"
                                >July 2015<span class="pull-right">12</span></a
                            >
                        </li>
                    </ul>
                </aside>

                <aside class="widget widget-tag">
                    <h3 class="widget-title">Popular Tags</h3>

                    <a href="#" title="Equine">Equine</a>
                    <a href="#" title="Studies">Studies</a>
                    <a href="#" title="Horse">Horse</a>
                    <a href="#" title="Veterinary">Veterinary</a>
                    <a href="#" title="Race">Race</a>
                    <a href="#" title="Training">Training</a>
                    <a href="#" title="Instructors">Instructors</a>
                    <a href="#" title="Equestrian">Equestrian</a>
                </aside>
            </div>
        </div>

        <!-- <div class="padding-70"></div> -->
        <div class="section-padding"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["getAllBlogs"]),

        allBlogPosts() {
            let blogs = null;

            if (this.getAllBlogs) {
                blogs = this.getAllBlogs;
            }
            console.log(blogs);
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
.latest-blog .entry-cover img {
    min-height: 220px;
    -o-object-fit: cover;
    object-fit: cover;
    max-height: 350px;
}

.latest-blog .entry-cover::before {
    background: rgba(247, 247, 247, 0.975);
}

/* .latest-blog .latest-blog-content {
    padding-right: 10px;
} */

.blog-section .latest-blog-content .entry-meta a {
    padding: 0;
}

.blog-section .latest-blog-content .entry-meta a:not(:first-child) {
    padding-left: 10px;
}

.latest-blog .latest-blog-content .post-date {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
}

.latest-blog .latest-blog-content h3.entry-title {
    font-family: "montserratlight";
    display: block;
}

.latest-blog .latest-blog-content a.read-more {
    text-decoration: underline;
}

.latest-blog-content span {
    display: block;
    width: fit-content;
}

@media (max-width: 479px) {
    .latest-blog .latest-blog-content h3.entry-title {
        font-size: 15px;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .latest-blog .latest-blog-content .entry-content p {
        margin-bottom: 15px;
    }
}
</style>
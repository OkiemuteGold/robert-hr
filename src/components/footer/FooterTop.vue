<template>
    <footer class="footer-main container-fluid no-padding">
        <div class="container">
            <!-- Widget About -->
            <aside class="col-md-4 col-sm-6 col-xs-6 ftr-widget about-widget">
                <h3>About Us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti eligendi vitae accusantium laboriosam rem magnam.
                </p>
            </aside>
            <!-- Widget About /- -->

            <!-- Widget Recent Post -->
            <aside
                class="col-md-4 col-sm-6 col-xs-6 ftr-widget recent-post-widget"
            >
                <h3>Quick Links</h3>

                <ul class="quick-links">
                    <li>
                        <router-link :to="{ name: 'About' }" aria-label="About"
                            >About Us</router-link
                        >
                    </li>

                    <li>
                        <router-link :to="{ name: 'Studs' }" aria-label="Studs"
                            >Studs</router-link
                        >
                    </li>

                    <li>
                        <router-link
                            :to="{ name: 'Gallery' }"
                            aria-label="Gallery"
                            >Gallery</router-link
                        >
                    </li>
                </ul>
            </aside>
            <!-- Widget Recent Post /- -->

            <!-- Widget Subscribe -->
            <aside
                class="col-md-4 col-sm-6 col-xs-6 ftr-widget subscribe-widget"
            >
                <h3>Follow us</h3>
                <p>
                    Sign up for our mailing list to get latest updates and
                    offers.
                </p>

                <!-- <div class="input-group">
                    <div class="file-envelope">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Email address"
                    />
                    <span class="input-group-btn">
                        <button class="btn" title="Subscribe" type="button">
                            <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </span>
                </div> -->

                <ul class="socials">
                    <li>
                        <a title="Facebook" href="#"
                            ><i class="fa fa-facebook"></i
                        ></a>
                    </li>
                    <li>
                        <a title="Twitter" href="#"
                            ><i class="fa fa-twitter"></i
                        ></a>
                    </li>
                    <li>
                        <a title="Linkedin" href="#"
                            ><i class="fa fa-linkedin"></i
                        ></a>
                    </li>
                </ul>
            </aside>
            <!-- Widget Subscribe /- -->

            <!-- Widget Recent Post -->
            <!-- <aside
                class="col-md-4 col-sm-6 col-xs-6 ftr-widget recent-post-widget"
            >
                <h3>Recent posts</h3>
                <div class="recent-content">
                    <a title="Recent Posts" href="#"
                        ><img
                            width="66"
                            height="66"
                            src="@/assets/images/footer-post-1.jpg"
                            alt="thumb"
                    /></a>
                    <h3>
                        <a
                            href="#"
                            title="The first mate and his too will do best"
                            >The first mate and his too will do best</a
                        >
                    </h3>
                    <p>Sep 13 - 2015</p>
                </div>
                <div class="recent-content">
                    <a title="Recent Posts" href="#"
                        ><img
                            width="66"
                            height="66"
                            src="@/assets/images/footer-post-2.jpg"
                            alt="thumb"
                    /></a>
                    <h3>
                        <a
                            href="#"
                            title="Travelled down the road and back again"
                            >Travelled down the road and back again</a
                        >
                    </h3>
                    <p>Sep 12 - 2015</p>
                </div>
            </aside> -->
            <!-- Widget Recent Post /- -->
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.ftr-widget p {
    color: #ccc;
}

.quick-links {
    padding-left: 0;
    list-style: none;
}

.quick-links li {
    margin-bottom: 10px;
}

.quick-links li a {
    font-size: 15px;
    color: #ccc;
    text-decoration: none;
}

.quick-links li a:hover {
    color: var(--yellowLight);
}

.subscribe-widget {
    text-align: left;
}
</style>
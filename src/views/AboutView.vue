<template>
    <div class="about">
        <!-- Info Section -->
        <div class="intro-about info-section container-fluid no-padding">
            <div class="section-padding"></div>
            <!-- Container -->
            <div class="container">
                <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                    <!-- Section Header -->
                    <div class="section-header left-header">
                        <!-- <h5>Our Pleasure to Say</h5> -->
                        <h3>About Roberto Horse Riding</h3>
                    </div>
                    <!-- Section Header /- -->
                    <div class="intro-about-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            recusandae.
                            <span>Lorem ipsum dolor sit</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            recusandae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            recusandae. Lorem ipsum dolor sit amet consectetur
                            adipisicing recusandae.
                        </p>
                        <router-link
                            :to="{ name: 'Contact' }"
                            aria-label="Contact Us"
                            class="contact-us"
                            >Contact Us</router-link
                        >
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                    <div>
                        <img
                            src="@/assets/images/process-1.jpg"
                            width="350"
                            height="250"
                            alt="about intro image"
                        />
                    </div>
                </div>
            </div>
            <!-- Container /- -->
            <div class="padding-70"></div>
        </div>
        <!-- Info Section /- -->

        <!-- Team Section -->
        <div class="team-section container-fluid no-padding">
            <div class="section-padding"></div>
            <!-- Container -->
            <div class="container">
                <!-- Section Header -->
                <div class="section-header">
                    <h5>Our Great Trainers</h5>
                    <h3>Meet Our Best Instructors</h3>
                </div>
                <!-- Section Header /- -->
                <div class="col-md-3 col-sm-3 col-xs-6">
                    <div class="team-box">
                        <img
                            src="@/assets/images/team-1.jpg"
                            alt="team"
                            width="272"
                            height="313"
                        />
                        <div class="team-content">
                            <h3>Hendry Smith</h3>
                            <h5>Founder/Instructors</h5>
                            <ul>
                                <li>
                                    <a href="#" title="Facebook"
                                        ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Twitter"
                                        ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Google"
                                        ><i
                                            class="fa fa-google-plus"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-6">
                    <div class="team-box">
                        <img
                            src="@/assets/images/team-2.jpg"
                            alt="team"
                            width="272"
                            height="313"
                        />
                        <div class="team-content">
                            <h3>Karry Wilson</h3>
                            <h5>Instructors</h5>
                            <ul>
                                <li>
                                    <a href="#" title="Facebook"
                                        ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Twitter"
                                        ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Google"
                                        ><i
                                            class="fa fa-google-plus"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-6">
                    <div class="team-box">
                        <img
                            src="@/assets/images/team-3.jpg"
                            alt="team"
                            width="272"
                            height="313"
                        />
                        <div class="team-content">
                            <h3>Lenin Parker</h3>
                            <h5>Instructors</h5>
                            <ul>
                                <li>
                                    <a href="#" title="Facebook"
                                        ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Twitter"
                                        ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Google"
                                        ><i
                                            class="fa fa-google-plus"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-6">
                    <div class="team-box">
                        <img
                            src="@/assets/images/team-4.jpg"
                            alt="team"
                            width="272"
                            height="313"
                        />
                        <div class="team-content">
                            <h3>Johny Deep</h3>
                            <h5>Instructors</h5>
                            <ul>
                                <li>
                                    <a href="#" title="Facebook"
                                        ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Twitter"
                                        ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#" title="Google"
                                        ><i
                                            class="fa fa-google-plus"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container /- -->
            <div class="padding-70"></div>
        </div>
        <!-- Team Section /- -->

        <!-- Our Courses -->
        <div class="our-courses container-fluid no-padding">
            <div class="section-padding"></div>
            <!-- Container -->
            <div class="container">
                <!-- Section Header -->
                <div class="section-header">
                    <h5>Our Process</h5>
                    <h3>How To Join Our Courses</h3>
                </div>
                <!-- Section Header /- -->
                <div class="courses-box">
                    <div class="col-md-4 col-sm-4 col-xs-6 courses-content">
                        <a href="#"><span class="icon icon-File"></span></a>
                        <h3>Select Your Course</h3>
                        <span>1</span>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-6 courses-content">
                        <a href="#"><span class="icon icon-Headset"></span></a>
                        <h3>Contact Our Trainers</h3>
                        <span>2</span>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-6 courses-content">
                        <a href="#"><span class="icon icon-Like"></span></a>
                        <h3>Join The Classes</h3>
                        <span>3</span>
                    </div>
                </div>
            </div>
            <!-- Container /- -->
            <div class="section-padding"></div>
        </div>
        <!-- Our Courses /- -->

        <!-- Clients -->
        <div class="clients container-fluid no-padding">
            <div class="section-padding"></div>
            <!-- Container -->
            <div class="container">
                <!-- Section Header -->
                <div class="section-header">
                    <h5>Trust Builders</h5>
                    <h3>Our Precious Partners</h3>
                </div>
                <!-- Section Header /- -->
                <div class="clients-carousel">
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-1.png"
                                alt="client-1"
                        /></a>
                    </div>
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-2.png"
                                alt="client-2"
                        /></a>
                    </div>
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-3.png"
                                alt="client-3"
                        /></a>
                    </div>
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-4.png"
                                alt="client-4"
                        /></a>
                    </div>
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-5.png"
                                alt="client-5"
                        /></a>
                    </div>
                </div>
            </div>
            <!-- Container / -->
            <div class="section-padding"></div>
        </div>
        <!-- Clients / -->
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "About Roberto Horse Riding",
                prevLinkText: "Home",
                currentLinkText: "About Us",
                description: null,
                imageUrl: require("@/assets/images/about-banner.jpg"),
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

<template>
    <div class="contact">
        <!-- Contact Us -->
        <div class="contact-us container-fluid no-padding">
            <!-- Map Section -->
            <div class="map container-fluid no-padding">
                <div
                    class="map-canvas"
                    id="map-canvas-contact"
                    data-lat="-38.145184"
                    data-lng="145.253816"
                    data-string="09 Design Street, Victoria, Australia."
                    data-zoom="12"
                ></div>
            </div>
            <!--  Map Section /- -->
            <div class="section-padding"></div>
            <!-- Container -->
            <div class="container">
                <!-- Section Header -->
                <div class="section-header left-header">
                    <h5>Leave Your Message</h5>
                    <h3>We Love to hear from You</h3>
                </div>
                <!-- Section Header /- -->
                <form class="contact-form">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <input
                                type="text"
                                required=""
                                placeholder="Your Name *"
                                id="input_name"
                                class="form-control"
                                name="contact-name"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <input
                                type="email"
                                required=""
                                placeholder="Your E-mail *"
                                id="input_email"
                                class="form-control"
                                name="contact-email"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <input
                                type="text"
                                required=""
                                placeholder="Phone"
                                id="input_phone"
                                class="form-control"
                                name="contact-phone"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <input
                                type="text"
                                required=""
                                placeholder="Subject"
                                id="input_subject"
                                class="form-control"
                                name="contact-subject"
                            />
                        </div>
                        <div class="form-group col-md-12">
                            <textarea
                                placeholder="Message"
                                id="textarea_message"
                                name="contact-message"
                                rows="5"
                                class="form-control"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <input
                                type="submit"
                                name="post"
                                id="btn_submit"
                                value="Post Comment"
                                title="Post Comment"
                            />
                        </div>
                        <div class="alert-msg" id="alert-msg"></div>
                    </div>
                </form>
                <div class="padding-70"></div>
            </div>
            <!-- Container /- -->
        </div>
        <!-- Contact Us /- -->
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
                title: "Keep In Touch",
                prevLinkText: "Home",
                currentLinkText: "Contact Us",
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

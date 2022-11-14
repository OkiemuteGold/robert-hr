<template>
    <div>
        <!-- Feature Section -->
        <div
            class="
                intro-about
                info-section
                feature-section
                container-fluid
                no-padding
            "
        >
            <div class="section-padding"></div>

            <div class="container">
                <div class="section-header">
                    <!-- <h5>Advantages</h5> -->
                    <h3>Our Special Features</h3>
                </div>

                <div class="intro-about-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Est nesciunt quasi hic dolor pariatur.
                        <span>Lorem ipsum dolor sit amet.</span> Lorem autem
                        culpa consequuntur tempore vel laudantium.
                    </p>
                </div>

                <div
                    class="all-horses-wrapper row"
                    v-if="stallionHorses && stallionHorses.length > 0"
                >
                    <router-link
                        :to="{
                            name: 'StallionDetails',
                            params: { id: horse.id },
                        }"
                        v-for="horse in stallionHorses"
                        :key="horse.id"
                        class="col-md-3 col-sm-6 col-xs-6"
                    >
                        <div class="image">
                            <img
                                :src="horse.slideImages[0].src"
                                :alt="horse.slideImages[0].alt"
                            />
                        </div>
                        <div class="info">
                            <h3>{{ horse.name }}</h3>
                            <p>{{ horse.info }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Feature Section -->

        <!-- Chooseus Section -->
        <div class="chooseus-section container-fluid no-padding">
            <div class="section-padding"></div>

            <div class="container">
                <div class="section-header">
                    <!-- <h5>Sports Society</h5> -->
                    <h3>Reasons to Choose Us</h3>
                </div>

                <!-- <div class="col-md-6 col-sm-12 col-xs-12">
                    <div
                        class="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                    >
                        <div class="panel panel-default">
                            <div
                                class="panel-heading"
                                role="tab"
                                id="faqheading1"
                            >
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#faqcontent1"
                                        aria-expanded="false"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing?
                                    </a>
                                </h4>
                            </div>
                            <div
                                id="faqcontent1"
                                class="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="faqheading1"
                            >
                                <div class="panel-body">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Nam eos perferendis
                                    laboriosam quod consequuntur sunt? Provident
                                    odit nisi asperiores repudiandae.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div
                                class="panel-heading"
                                role="tab"
                                id="faqheading2"
                            >
                                <h4 class="panel-title">
                                    <a
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#faqcontent2"
                                        aria-expanded="true"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing?
                                    </a>
                                </h4>
                            </div>
                            <div
                                id="faqcontent2"
                                class="panel-collapse collapse in"
                                role="tabpanel"
                                aria-labelledby="faqheading2"
                            >
                                <div class="panel-body">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Nam eos perferendis
                                    laboriosam quod consequuntur sunt? Provident
                                    odit nisi asperiores repudiandae.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div
                                class="panel-heading"
                                role="tab"
                                id="faqheading3"
                            >
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#faqcontent3"
                                        aria-expanded="false"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing?
                                    </a>
                                </h4>
                            </div>
                            <div
                                id="faqcontent3"
                                class="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="faqheading3"
                            >
                                <div class="panel-body">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Nam eos perferendis
                                    laboriosam quod consequuntur sunt? Provident
                                    odit nisi asperiores repudiandae.
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div
                                class="panel-heading"
                                role="tab"
                                id="faqheading4"
                            >
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#faqcontent4"
                                        aria-expanded="false"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing?
                                    </a>
                                </h4>
                            </div>
                            <div
                                id="faqcontent4"
                                class="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="faqheading4"
                            >
                                <div class="panel-body">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Nam eos perferendis
                                    laboriosam quod consequuntur sunt? Provident
                                    odit nisi asperiores repudiandae.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="col-md-12 col-sm-12 col-xs-12">
                    <!-- Video Section -->
                    <div class="video-section">
                        <div class="video-section-content">
                            <img
                                src="@/assets/images/choose-us.jpg"
                                alt="choose-us"
                                width="565"
                                height="352"
                            />
                            <!-- https://vimeo.com/45830194 -->
                            <a class="popup-vimeo" href="javascript:void(0)"
                                ><i class="fa fa-play"></i
                            ></a>
                        </div>
                    </div>
                    <!-- Video Section /- -->
                </div>
            </div>

            <div class="section-padding"></div>
        </div>
        <!-- Chooseus Section -->
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import stallion from "@/api/stallion";

export default {
    data() {
        return {
            stallionHorses: null,
        };
    },

    computed: {
        ...mapState(["allStallionHorses"]),
    },

    methods: {
        ...mapActions(["setAllStallionHorses"]),
    },

    mounted() {
        this.setAllStallionHorses();

        if (this.allStallionHorses) {
            this.stallionHorses = this.allStallionHorses;
        }
    },
};
</script>

<style scoped>
/* .all-horses-wrapper .image {
} */

.video-section {
    max-width: 500px;
    margin: auto;
}
</style>
<template>
    <div>
        <!-- Feature Section -->
        <div class="info-section feature-section container-fluid no-padding">
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
                    v-if="maresHorses && maresHorses.length > 0"
                >
                    <div
                        v-for="horse in maresHorses"
                        :key="horse.id"
                        class="col-md-3 col-sm-6 col-xs-12"
                    >
                        <router-link
                            :to="{
                                name: 'StudDetails',
                                params: { id: horse.id },
                                query: { category: studName },
                            }"
                            class="image"
                        >
                            <img
                                :src="horse.slideImages[0].src"
                                :alt="horse.slideImages[0].alt"
                            />
                        </router-link>
                        <div class="info">
                            <h3>
                                <router-link
                                    :to="{
                                        name: 'StudDetails',
                                        params: { id: horse.id },
                                        query: { category: studName },
                                    }"
                                >
                                    {{ horse.name }}
                                </router-link>
                            </h3>

                            <p>{{ horse.breed }}</p>
                        </div>
                    </div>
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

export default {
    data() {
        return {
            maresHorses: null,
            studName: "mares",
        };
    },

    computed: {
        ...mapState(["allStallionHorses"]),
    },

    methods: {
        ...mapActions(["setAllStallionHorses"]),
    },

    mounted() {
        this.setAllStallionHorses(this.studName);

        if (this.allStallionHorses) {
            this.maresHorses = this.allStallionHorses;
        }
    },
};
</script>

<style scoped>
.info-section .intro-about-content p {
    margin-bottom: 0;
}

.section-header h3 {
    margin-top: 0;
}

.all-horses-wrapper > div {
    margin-top: 20px;
}

.all-horses-wrapper .image img {
    height: 180px;
    -o-object-fit: cover;
    object-fit: cover;
}

.all-horses-wrapper h3 {
    font-size: 20px;
}

.all-horses-wrapper h3 a {
    color: var(--black1);
}

.all-horses-wrapper h3 a:hover {
    color: var(--yellowDark);
    text-decoration: none;
}

.all-horses-wrapper p {
    font-size: 15px;
}

.video-section {
    max-width: 500px;
    margin: auto;
}

@media (min-width: 991px) {
    .feature-section .intro-about-content {
        margin-bottom: 40px;
    }
}
</style>
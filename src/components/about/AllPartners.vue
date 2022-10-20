<template>
    <div class="clients container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="row">
                <div class="section-header">
                    <h5>Our Partners</h5>
                    <h3>People Trust Us</h3>
                </div>

                <!-- <div class="clients-carousel">
                    <div class="col-md-12 item">
                        <a href="#" title="client"
                            ><img
                                src="@/assets/images/clients-1.png"
                                alt="client-1"
                        /></a>
                    </div>
                </div> -->

                <div
                    class="col-12"
                    v-if="allPartners && allPartners.length > 0"
                >
                    <carousel
                        :autoplay="true"
                        :nav="false"
                        :dots="true"
                        :margin="30"
                        :stagePadding="20"
                        :responsive="{
                            0: { items: 1 },
                            375: { items: 2 },
                            540: { items: 3 },
                            991: { items: 4, dots: false, autoplay: true },
                            1025: { items: 5, dots: false },
                        }"
                        class="clients-carousel"
                    >
                        <div
                            v-for="(partner, index) in allPartners"
                            :key="index"
                            class="item"
                        >
                            <a href="#">
                                <img
                                    :src="partner.imageUrl"
                                    :alt="partner.name"
                                    width="253"
                                    height="244"
                                    :aria-label="partner.name"
                                />
                            </a>
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
// import { mapGetters } from "vuex";

export default {
    components: { carousel },

    // computed: {
    //     ...mapGetters(["getAllStudItems"]),
    // },

    data() {
        return {
            allPartners: [
                {
                    name: "client 1",
                    imageUrl: require("@/assets/images/clients-1.png"),
                },
                {
                    name: "client 2",
                    imageUrl: require("@/assets/images/clients-2.png"),
                },
                {
                    name: "client 3",
                    imageUrl: require("@/assets/images/clients-3.png"),
                },
                {
                    name: "client 4",
                    imageUrl: require("@/assets/images/clients-1.png"),
                },
                {
                    name: "client 5",
                    imageUrl: require("@/assets/images/clients-3.png"),
                },
            ],
        };
    },

    // async mounted() {
    //     setTimeout(() => {
    //         this.allPartners = this.getAllPartners;
    //     }, 500);
    // },
};
</script>

<style scoped>
.process-section::before {
    height: 18%;
}

.process-section .section-header,
.process-section .process-box {
    padding-top: 90px;
}

.process-section .section-header {
    margin-bottom: 20px;
}

.process-section .section-header h3 {
    margin-top: 10px;
    text-transform: capitalize;
}

.process-section .section-header h5 {
    margin-bottom: 0;
}

.process-carousel img {
    border-radius: 10px 10px 0 0;
}

.process-content {
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0 0 10px 10px;
}

.process-content h3 {
    margin-bottom: 0;
}

@media (max-width: 991px) {
    .process-section .process-box {
        padding-top: 60px;
    }
}
</style>
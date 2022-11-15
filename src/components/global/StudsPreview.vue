<template>
    <div class="process-section container-fluid no-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="section-header">
                        <h5>Our Horses</h5>
                        <h3>From the studs</h3>
                    </div>

                    <div class="custom-nav">
                        <a class="btn prev" @click="$refs.prev.click()">
                            <i class="fa fa-angle-left" aria-hidden="true"> </i>
                        </a>
                        <a class="btn next" @click="$refs.next.click()">
                            <i class="fa fa-angle-right" aria-hidden="true">
                            </i>
                        </a>
                    </div>
                </div>

                <div
                    class="col-md-8 col-sm-12 col-xs-12 process-box"
                    v-if="allStudItems && allStudItems.length > 0"
                >
                    <carousel
                        :autoplay="false"
                        :nav="false"
                        :dots="false"
                        :margin="30"
                        :stagePadding="10"
                        :responsive="{
                            0: { items: 1 },
                            540: { items: 3 },
                        }"
                        class="process-carousel"
                    >
                        <div v-for="(item, index) in allStudItems" :key="index">
                            <img
                                :src="item.imageUrl"
                                :alt="item.alt"
                                width="253"
                                height="244"
                            />
                            <div class="process-content">
                                <h3>{{ item.name }}</h3>
                            </div>
                        </div>

                        <template slot="prev"
                            ><span hidden ref="prev" class="prev"
                                >prev</span
                            ></template
                        >
                        <template slot="next"
                            ><span hidden ref="next" class="next"
                                >next</span
                            ></template
                        >
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapActions, mapState } from "vuex";

export default {
    components: { carousel },

    computed: {
        ...mapState(["allStudItems"]),
    },

    created() {
        this.setAllStudItems();
    },

    data() {
        return {
            studsItems: null,
        };
    },

    methods: {
        ...mapActions(["setAllStudItems"]),
    },

    mounted() {
        if (this.allStudItems) {
            this.studsItems = this.allStudItems;
        }
    },
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
<template>
    <div class="process-section container-fluid no-padding">
        <div class="container">
            <div class="col-md-4 col-sm-12 col-xs-12">
                <div class="section-header">
                    <h5>Our Horses</h5>
                    <h3>From the studs</h3>
                </div>

                <div class="custom-nav">
                    <a class="btn prev">
                        <i
                            class="fa fa-angle-left"
                            aria-hidden="true"
                            @click="$refs.prev.click()"
                        >
                        </i>
                    </a>
                    <a class="btn next">
                        <i
                            class="fa fa-angle-right"
                            aria-hidden="true"
                            @click="$refs.next.click()"
                        >
                        </i>
                    </a>
                </div>
            </div>

            <div class="col-md-8 col-sm-12 col-xs-12 process-box">
                <carousel
                    :items="1"
                    :autoplay="false"
                    :nav="false"
                    :dots="false"
                    :margin="30"
                    :stagePadding="10"
                    :responsive="{
                        540: { items: 3 },
                    }"
                    class="process-carousel"
                >
                    <div v-for="(item, index) in allStudItems" :key="index">
                        <img
                            :src="item.imgUrl"
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
</template>

<script>
import carousel from "vue-owl-carousel";
import homeStud from "@/api/homeStuds";

export default {
    components: { carousel },

    data() {
        return {
            allStudItems: homeStud,
        };
    },
};
</script>

<style scoped>
.process-section::before {
    height: 18%;
}

.process-section .section-header,
.process-section .process-box {
    padding-top: 85px;
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
<template>
    <div class="all-testimonials container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="section-header">
                        <h5>Testimonials</h5>
                        <h3>Customer Words</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magni voluptates iure culpa odit reiciendis
                            temporibus!
                        </p>
                    </div>
                </div>

                <div
                    class="
                        col-md-6 col-sm-6 col-xs-12
                        testimonial-carousel-wrapper
                    "
                    v-if="AllTestimonials && AllTestimonials.length > 0"
                >
                    <div class="quote-icon">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>

                    <carousel
                        :items="1"
                        :autoplay="false"
                        :nav="false"
                        :dots="false"
                        :margin="30"
                        :responsive="{
                            0: { items: 1, autoplay: false },
                        }"
                        class="testimonial-carousel"
                    >
                        <div
                            v-for="(testimonial, index) in AllTestimonials"
                            :key="index"
                        >
                            <div class="words">
                                <p>{{ testimonial.words }}</p>
                            </div>

                            <div class="image">
                                <img
                                    :src="testimonial.imageUrl"
                                    :alt="testimonial.name"
                                    :aria-label="testimonial.name"
                                    v-if="testimonial.imageUrl"
                                />

                                <div class="info">
                                    <h3>{{ testimonial.name }}</h3>

                                    <span v-if="testimonial.role">{{
                                        testimonial.role
                                    }}</span>
                                </div>
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
            </div>
        </div>

        <div class="section-padding"></div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    components: { carousel },

    data() {
        return {
            AllTestimonials: [
                {
                    name: "Roberto Fernandez",
                    role: "Dev Manager, Google Inc",
                    imageUrl: require("@/assets/images/testi-1.jpg"),
                    words: "Great customer service, very healthy horse, and state of the art facilities.",
                },
                {
                    name: "Okiemute Gold",
                    role: "Dev Manager, Google Inc",
                    imageUrl: require("@/assets/images/testi-1.jpg"),
                    words: "Great customer service, very healthy horse, and state of the art facilities.",
                },
            ],
        };
    },
};
</script>

<style scoped>
.all-testimonials {
    background: #f8f8f8;
}

.section-header {
    text-align: left;
    margin-bottom: 40px;
}

.section-header h5 {
    margin: 0;
}

.section-header h3 {
    margin-bottom: 20px;
}

.section-header p {
    max-width: 500px;
    font-size: 15px;
    color: #666;
    padding-right: 10px;
    margin-bottom: 0;
    line-height: 28px;
    letter-spacing: 0.45px;
}

.testimonial-carousel-wrapper .quote-icon {
    margin-bottom: 20px;
}

.testimonial-carousel-wrapper .quote-icon i {
    font-size: 32px;
    color: #e2e2e2;
}

.testimonial-carousel {
    padding: 20px 25px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
}

.testimonial-carousel .words p {
    color: #969696;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 35px;
}

.testimonial-carousel .image {
    display: flex;
    align-items: center;
}

.testimonial-carousel .image img {
    height: 70px;
    width: 70px;
    margin-right: 20px;
    border-radius: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.testimonial-carousel .image .info {
    letter-spacing: 0.57px;
}

.testimonial-carousel .image .info h3 {
    font-family: "montserratlight";
    font-size: 15px;
    color: #111;
    margin-top: 0;
    margin-bottom: 5px;
}

.testimonial-carousel .image .info span {
    font-family: "Crimson Text", serif;
    font-style: italic;
    font-size: 14px;
    color: #ffc619;
}

.custom-nav {
    margin-top: 20px;
    text-align: right;
}

.custom-nav a {
    height: 33px;
    width: 33px;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    color: var(--black1);
    border: 1px solid var(--black1);
    border-radius: 100%;
    padding: 6px 12px;
    margin-right: 8px;
    margin-bottom: 0;
    line-height: 1.42857143;
    text-align: center;
    vertical-align: middle;
    -o-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
}

.custom-nav a:hover {
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
}

@media (max-width: 767px) {
    /* .testimonial-carousel-wrapper {
        margin-top: 40px;
    } */
}
</style>
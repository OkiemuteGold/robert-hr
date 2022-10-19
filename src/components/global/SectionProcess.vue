<template>
    <div class="our-courses container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="section-header">
                <h5>Our Process</h5>
                <h3>How To Partner With Us</h3>
            </div>

            <div class="courses-box">
                <div
                    v-for="(step, index) in allSteps"
                    :key="index"
                    class="col-md-4 col-sm-4 col-xs-6 courses-content"
                >
                    <a href="#"><span :class="`icon ${step.icon}`"></span></a>
                    <h3>{{ step.title }}</h3>
                    <span>{{ index + 1 }}</span>
                </div>
            </div>
        </div>

        <div class="section-padding"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allSteps: [
                {
                    icon: "icon-File",
                    title: "Select Horse From Facility",
                },
                {
                    icon: "icon-Headset",
                    title: "Contact Our Trainers",
                },
                {
                    icon: "icon-Like",
                    title: "Get Started With Us",
                },
            ],
        };
    },
};
</script>

<style scoped>
.our-courses .courses-content:not(:last-child)::before {
    background-image: url(@/assets/images/courses-arrow.png);
    background-position: right center;
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 40px;
    position: absolute;
    top: 100%;
    left: -50px;
    right: 0;
    width: 100%;
}

@media (max-width: 991px) {
    .our-courses .courses-content:not(:last-child)::before {
        left: 30px;
    }
}
</style>
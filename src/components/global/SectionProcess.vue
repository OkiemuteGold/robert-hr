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
                    <span class="inner"
                        ><span :class="`icon ${step.icon}`"></span
                    ></span>
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
                    title: "Select A Service",
                },
                {
                    icon: "icon-Headset",
                    title: "Contact A Trainer",
                },
                {
                    icon: "icon-Like",
                    title: "Get Started",
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
    left: 30px;
    right: 0;
    width: 100%;
}

.our-courses .courses-content .inner {
    background-color: #fff;
    border-radius: 100%;
    color: #111;
    display: inline-block;
    font-size: 22px;
    height: 91px;
    width: 91px;
    line-height: 91px;
    text-align: center;
    position: absolute;
    left: 0;
    text-decoration: none;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
}

.our-courses .courses-content .inner:hover {
    background-color: #fcd846;
}

@media (max-width: 767px) {
    .our-courses .courses-content:not(:last-child)::before {
        left: -20%;
    }
}

@media (max-width: 600px) {
    .our-courses .courses-content:not(:last-child)::before {
        display: none;
    }
}
</style>
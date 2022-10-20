<template>
    <div class="intro-about info-section container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="section-header left-header">
                        <!-- <h5>Our Pleasure to Say</h5> -->
                        <h3>About Roberto Horse Riding</h3>
                    </div>

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
                <div class="col-md-5 col-sm-12 col-xs-12">
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
        </div>

        <!-- <div class="padding-70"></div> -->
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
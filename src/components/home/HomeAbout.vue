<template>
    <div class="intro-about container-fluid no-padding">
        <div class="section-padding"></div>

        <div class="container">
            <div class="section-header">
                <h5>From the Founder!</h5>
                <h3>About Roberto Horse Riding</h3>
            </div>

            <div class="intro-about-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    recusandae. <span>Lorem ipsum dolor dolor sit</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    recusandae. Amet consectetur adipisicing recusandae. Lorem
                    ipsum dolor sit amet consectetur adipisicing recusandae.
                </p>

                <router-link :to="{ name: 'About' }" aria-label="About"
                    >About us</router-link
                >
                <router-link
                    :to="{ name: 'Studs' }"
                    aria-label="Studs"
                    class="contact-us"
                    >Studs</router-link
                >
            </div>
        </div>

        <div class="section-padding"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
<template>
    <div class="intro-about container-fluid no-padding pt-100 pb-100">
        <div class="container">
            <div class="section-header">
                <h5>From the Founders!</h5>
                <h3>Origin of Yeguada Fernández Millares</h3>
            </div>

            <div class="intro-about-content">
                <p>
                    The beginnings of the Stud Fernández Millares are born from
                    the motivation and admiration of Roberto Fernandez and
                    Mónica Millares for purebred Arabian horses. In 2018 they
                    start breeding purebred Arabian horses.
                </p>
                <p>
                    The influence of the Yeguada Ybarra in our beginning is
                    manifest. After several visits to "La Cascajera" in Seville,
                    the couple decides to acquire a batch of mares from the most
                    outstanding mares and a stallion Kirov son of Vigia, one of
                    the most important horses of the stud farm.
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
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .section-header h3 {
    text-transform: capitalize;
} */

.intro-about-content p:not(:last-of-type) {
    margin-bottom: 20px;
}
</style>
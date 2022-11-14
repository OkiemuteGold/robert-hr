<template>
    <div class="contact">
        <div class="contact-us container-fluid no-padding">
            <ContactMap />

            <div class="section-padding"></div>

            <div class="container">
                <div class="section-header text-center">
                    <h5>Send Us A Message</h5>
                    <h3 class="text-capitalize">We love to hear from you</h3>
                </div>

                <ContactForm />

                <div class="padding-70"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";

import "@/mixins";
import { mapActions } from "vuex";

export default {
    components: {
        ContactMap,
        ContactForm,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Keep In Touch",
                description: null,
                prevLinkText: null,
                currentLinkText: null,
                buttonUrl: null,
                imageUrl: null,
            });
        },
    },

    mounted() {
        this.setCurrentPage(this.$router.history.current.name);
        this.setBannerStyles();
    },
};
</script>

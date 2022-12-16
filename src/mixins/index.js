import Vue from "vue";
import { mapGetters } from "vuex";

Vue.mixin({
    computed: {
        ...mapGetters([
            "currentSitePage",
            "bannerSettings",
        ]),
    },

    methods: {
        validEmail: function (email) {
            var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test(email);
        },

        validPhone: function (phone) {
            // var phoneRegex = /^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm;
            var phoneRegex = /^\d{11}$/;
            return phoneRegex.test(phone);
        },

        capitalizeTexts(texts) {
            let words = texts.split(" ");

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            // let words = texts.charAt(0).toUpperCase() + texts.slice(1);
            let sender = words.join(" ");
            return sender;
        },
    },
});

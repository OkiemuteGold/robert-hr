import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

Vue.mixin({
    computed: {
        ...mapGetters([
            "currentSitePage",
            "bannerSettings",
        ]),
    },

    methods: {
        ...mapActions([
            "setActionLoading",
            "setAlertModalStatus",
        ]),

        serverErrorMessage: function () {
            this.setActionLoading(false);
            setTimeout(() => {
                let payload = {
                    status: true,
                    type: "error",
                    message: "Server Error. Please try again later",
                };
                this.setAlertModalStatus(payload);
            }, 200);
        },

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

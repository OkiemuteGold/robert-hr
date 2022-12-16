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

        eliminateDuplicateCodes(arr) {
            return arr
                .map((e) => e["groupId"])
                .map((e, i, final) => final.indexOf(e) === i && i)
                .filter((obj) => arr[obj])
                .map((e) => arr[e]);
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

        shuffleArray: function (array) {
            var ctr = array.length,
                temp,
                index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = array[ctr];
                array[ctr] = array[index];
                array[index] = temp;
            }
            return array;
        },
    },
});

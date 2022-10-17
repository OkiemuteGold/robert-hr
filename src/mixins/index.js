import Vue from "vue";
import { mapGetters } from "vuex";

Vue.mixin({
    computed: {
        ...mapGetters([
            "currentSitePage",
            "bannerSettings",
        ]),

        getCurrentYear() {
            let date = new Date();
            return date.getFullYear();
        },
    },

    methods: {
        addComma(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        validEmail: function (email) {
            var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test(email);
        },

        getTimeAgo: function (date) {
            var currDate = new Date();
            var diffMs = currDate.getTime() - new Date(date).getTime();
            var sec = diffMs / 1000;
            if (sec < 60)
                return (
                    parseInt(sec) + " second" + (parseInt(sec) > 1 ? "s" : "") + " ago"
                );
            var min = sec / 60;
            if (min < 60)
                return (
                    parseInt(min) + " minute" + (parseInt(min) > 1 ? "s" : "") + " ago"
                );
            var h = min / 60;
            if (h < 24)
                return parseInt(h) + " hour" + (parseInt(h) > 1 ? "s" : "") + " ago";
            var d = h / 24;
            if (d < 30)
                return parseInt(d) + " day" + (parseInt(d) > 1 ? "s" : "") + " ago";
            var m = d / 30;
            if (m < 12)
                return parseInt(m) + " month" + (parseInt(m) > 1 ? "s" : "") + " ago";
            var y = m / 12;
            return parseInt(y) + " year" + (parseInt(y) > 1 ? "s" : "") + " ago";
        },

        formatDate: function (date) {
            var d = new Date(date);
            var hours = d.getHours();
            var minutes = d.getMinutes();
            var ampm = hours >= 12 ? "pm" : "am";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? "0" + minutes : minutes;
            var strTime = hours + ":" + minutes + " " + ampm;
            let returnedDate;

            var newD = new Date();

            let userdate =
                d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            let todaysdate =
                newD.getDate() + "/" + (newD.getMonth() + 1) + "/" + newD.getFullYear();

            if (userdate === todaysdate) {
                returnedDate = strTime + ", Today";
            } else {
                returnedDate =
                    d.getDate() +
                    "/" +
                    (d.getMonth() + 1) +
                    "/" +
                    d.getFullYear() +
                    "  " +
                    strTime;
            }

            return returnedDate;
        },

        formateDateByName: function (newDate) {
            const d = new Date(newDate);
            const year = d.getFullYear(); // 2019
            const date = d.getDate();
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            const dayIndex = d.getDay();
            const dayName = days[dayIndex];

            const monthIndex = d.getMonth();
            const monthName = months[monthIndex];

            const formatted = `${dayName}, ${date} ${monthName} ${year}`;

            return formatted;
        },
    },
});

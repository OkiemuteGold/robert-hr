<template>
    <div class="not-found">
        <NotFound />
    </div>
</template>

<script>
import "@/mixins";
import { mapActions } from "vuex";
import NotFound from "@/components/not-found/NotFound";

export default {
    components: {
        NotFound,
    },

    methods: {
        ...mapActions(["setCurrentPage", "setBannerSettings"]),

        setBannerStyles() {
            this.setBannerSettings({
                title: "Page Not Found",
                prevLinkText: null,
                currentLinkText: null,
                description:
                    "Oopss! The page you're looking for doesn’t exist or may have be changed or removed",
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

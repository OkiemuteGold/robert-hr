<template>
    <div
        :class="[
            currentSitePage == 'Home',
            ['About', 'Services', 'Studs'].includes(currentSitePage),
            ['Contact', 'FAQs', 'NotFound'].includes(currentSitePage),
        ]"
    >
        <BannerHome v-if="currentSitePage == 'Home'" v-once />

        <BannerInner
            v-if="['About', 'Services', 'Studs'].includes(currentSitePage)"
            v-once
        />

        <BannerEmpty
            v-if="['Contact', 'FAQs', 'NotFound'].includes(currentSitePage)"
            v-once
        />
    </div>
</template>

<script>
import "@/mixins";
import BannerHome from "./BannerHome.vue";
import BannerInner from "./BannerInner.vue";
import BannerEmpty from "./BannerEmpty.vue";

export default {
    components: {
        BannerHome,
        BannerInner,
        BannerEmpty,
    },
};
</script>

<style>
</style>
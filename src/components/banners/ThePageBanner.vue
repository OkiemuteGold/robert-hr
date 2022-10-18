<template>
    <div
        :class="[
            currentSitePage == 'Home',
            ['About', 'Studs', 'Studs01', 'Studs02', 'Gallery'].includes(
                currentSitePage
            ),
            ['Contact', 'FourZeroFour'].includes(currentSitePage),
        ]"
    >
        <BannerHome v-if="currentSitePage == 'Home'" v-once />

        <BannerInner
            v-if="
                ['About', 'Studs', 'Studs01', 'Studs02', 'Gallery'].includes(
                    currentSitePage
                )
            "
            v-once
        />

        <BannerEmpty
            v-if="['Contact', 'FourZeroFour'].includes(currentSitePage)"
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
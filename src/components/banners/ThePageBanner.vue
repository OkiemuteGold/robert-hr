<template>
    <div
        :class="[
            currentSitePage == 'Home',
            [
                'About',
                'Studs',
                'Stallion',
                'Mares',
                'Foals',
                'Fillies',
                'Services',
                'Gallery',
                'Blog',
            ].includes(currentSitePage),
            ['Contact', 'StudDetails', 'FourZeroFour'].includes(
                currentSitePage
            ),
        ]"
    >
        <BannerHome v-if="currentSitePage == 'Home'" v-once />

        <BannerInner
            v-if="
                [
                    'About',
                    'Studs',
                    'Stallion',
                    'Mares',
                    'Foals',
                    'Fillies',
                    'Services',
                    'Gallery',
                    'Blog',
                ].includes(currentSitePage)
            "
            v-once
        />

        <BannerEmpty
            v-if="
                ['Contact', 'StudDetails', 'FourZeroFour'].includes(
                    currentSitePage
                )
            "
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
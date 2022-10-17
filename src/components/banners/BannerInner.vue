<template>
    <div
        class="page-banner container-fluid no-padding"
        :style="`background-image: url(${bannerSettings.imageUrl})`"
    >
        <div class="banner-content">
            <h3 v-if="bannerSettings.title">{{ bannerSettings.title }}</h3>
            <p v-if="bannerSettings.description">
                {{ bannerSettings.description }}
            </p>

            <img
                src="@/assets/images/banner-seprator.png"
                alt="banner separator image"
                width="348"
                height="48"
            />

            <ol class="breadcrumb">
                <li v-if="bannerSettings.prevLinkText">
                    <router-link :to="{ name: bannerSettings.prevLinkText }">{{
                        bannerSettings.prevLinkText
                    }}</router-link>
                </li>
                <li class="active" v-if="bannerSettings.currentLinkText">
                    {{ bannerSettings.currentLinkText }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .page-banner {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 390px;
    min-height: 390px;
    position: relative;
    text-align: center;
    z-index: 1;
} */

.page-banner .banner-content p {
    color: #fff;
    font-family: "Crimson Text", serif;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: capitalize;
}
</style>

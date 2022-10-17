<template>
    <div class="page-header" data-padding="top">
        <div class="container">
            <div class="row" data-padding="smtop">
                <div class="col-12">
                    <div class="sectiontitle-element--center">
                        <h1 class="big">{{ bannerSettings.title }}</h1>
                        <p>
                            {{ bannerSettings.description }}
                        </p>
                        <!-- <p>Please ensure to check the link and try again</p>
                        <router-link
                            :to="{ name: 'NotFound' }"
                            class="btn--big--round"
                            >Return Home</router-link
                        > -->
                    </div>
                </div>
            </div>

            <div class="row mt-20">
                <div class="col-12">
                    <div class="separator-element"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
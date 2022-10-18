<template>
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-header">
                        <h1 v-if="bannerSettings.title">
                            {{ bannerSettings.title }}
                        </h1>
                        <p v-if="bannerSettings.description">
                            {{ bannerSettings.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-header {
    margin-bottom: 45px;
}

.section-header p {
    margin-bottom: 0;
}
</style>
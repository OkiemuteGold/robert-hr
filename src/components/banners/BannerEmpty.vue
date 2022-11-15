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
.page-header {
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0;
}

.section-header {
    margin-bottom: 0;
}

.section-header h1 {
    margin-top: 0;
    margin-bottom: 0;
}

.section-header p {
    margin-top: 20px;
    margin-bottom: 0;
}
</style>
<template>
    <div class="horse-details">
        <h1>{{ currentHorse.name }}</h1>
    </div>
</template>

<script>
export default {
    props: ["horse"],
    data() {
        return {
            currentHorse: this.horse,
        };
    },
};
</script>

<style scoped>
.horse-details {
    padding-top: 200px;
    padding-bottom: 200px;
}

h1 {
    font-size: 40px;
    color: var(--black1);
}
</style>
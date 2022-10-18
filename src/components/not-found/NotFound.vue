<template>
    <section class="not-found">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-header">
                        <div class="error-image">
                            <img
                                src="@/assets/images/404-ic.png"
                                alt="404 image"
                            />
                        </div>

                        <router-link :to="{ name: 'Home' }"
                            >Return Home</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
    padding: 1rem;
}

.section-header {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.error-image {
    max-width: 450px;
    margin-top: 2.5rem;
    margin-bottom: 5rem;
}

.section-header a {
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    background-color: var(--yellowLight);
    color: var(--black1);
    border: 2px solid transparent;
    outline: none;
    padding: 13px 30px;
    letter-spacing: 1.95px;
    text-transform: uppercase;
    text-decoration: none;
    -o-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -webkit-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}

.section-header a:hover {
    background-color: transparent;
    border-color: var(--black1);
}
</style>
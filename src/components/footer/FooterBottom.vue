<template>
    <div class="bottom-footer container-fluid no-padding">
        <!-- Container -->
        <div class="container">
            <div class="address-box">
                <div class="col-md-4 col-sm-4 col-xs-6">
                    <div class="address-content">
                        <span class="icon icon-Pointer"></span>
                        <h3>Address:</h3>
                        <p>
                            Yeguada Fernández Millares, <br />
                            Cortijo los millares s/n trigueros (Huelva).
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-6 address-content-1">
                    <div class="address-content">
                        <span class="icon icon-Phone2"></span>
                        <h3>Phone:</h3>
                        <p>
                            <a
                                href="tel:+34617375921"
                                aria-label="+34 617 375 921"
                                >+34 617 375 921</a
                            >
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-6">
                    <div class="address-content">
                        <span class="icon icon-Mail"></span>
                        <h3>Email Address:</h3>
                        <p>
                            <a
                                href="mailto:info@yeguadafernandezmillares.com"
                                title="mailto:info@yeguadafernandezmillares.com"
                                >info@yeguadafernandezmillares.com</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container /- -->
        <div class="footer-copyright">
            <p>copyright &copy; 2022 | yeguadafernandezmillares</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.address-content p {
    text-transform: capitalize;
}

.address-content p a {
    -ms-word-break: break-all;
    word-break: break-all;
    text-transform: lowercase;
}
</style>
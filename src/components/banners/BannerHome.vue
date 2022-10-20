<template>
    <div class="photo-slider container-fluid no-padding">
        <div
            id="main-carousel"
            class="carousel slide carousel-fade"
            data-ride="carousel"
        >
            <!-- <ol class="carousel-indicators">
                <li
                    data-target="#main-carousel"
                    data-slide-to="0"
                    class="active"
                >
                    01
                </li>
                <li data-target="#main-carousel" data-slide-to="1">02</li>
                <li data-target="#main-carousel" data-slide-to="2">03</li>
            </ol> -->

            <div role="listbox" class="carousel-inner">
                <div class="item active">
                    <img
                        width="1920"
                        height="950"
                        alt="slider"
                        src="@/assets/images/slider-1.jpg"
                    />
                    <div class="carousel-caption">
                        <!-- <h5>Welcome To Roberto Horse Riding</h5> -->
                        <h3>Welcome To Roberto Horse Riding</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="item">
                    <img
                        width="1920"
                        height="950"
                        alt="slider"
                        src="@/assets/images/slider-2.jpg"
                    />
                    <div class="carousel-caption">
                        <h5>Roberto Horse Riding</h5>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="item">
                    <img
                        width="1920"
                        height="950"
                        alt="slider"
                        src="@/assets/images/slider-3.jpg"
                    />
                    <div class="carousel-caption">
                        <h5>Roberto Horse Riding</h5>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <a
                    class="left carousel-control"
                    href="#main-carousel"
                    role="button"
                    data-slide="prev"
                >
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <a
                    class="right carousel-control"
                    href="#main-carousel"
                    role="button"
                    data-slide="next"
                >
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-inner > .item > img {
    min-height: 75vh;
    -o-object-fit: cover;
    object-fit: cover;
}

.photo-slider .carousel-caption h3 {
    margin-bottom: 40px;
}

@media (max-width: 639px) {
    .photo-slider .carousel-caption h3 {
        font-size: 32px;
        margin-bottom: 30px;
    }
}

@media (max-width: 515px) {
    .photo-slider .carousel-caption h3 {
        font-size: 25px;
        margin-bottom: 30px;
    }

    .photo-slider .carousel-caption p {
        font-size: 18px;
    }
}
</style>

<template>
    <!-- Photo Slider -->
    <div class="photo-slider container-fluid no-padding">
        <!-- Main Carousel -->
        <div
            id="main-carousel"
            class="carousel slide carousel-fade"
            data-ride="carousel"
        >
            <ol class="carousel-indicators">
                <li
                    data-target="#main-carousel"
                    data-slide-to="0"
                    class="active"
                >
                    01
                </li>
                <li data-target="#main-carousel" data-slide-to="1">02</li>
                <li data-target="#main-carousel" data-slide-to="2">03</li>
            </ol>
            <div role="listbox" class="carousel-inner">
                <div class="item active">
                    <img
                        width="1920"
                        height="950"
                        alt="slider"
                        src="@/assets/images/slider-1.jpg"
                    />
                    <div class="carousel-caption">
                        <h5>Welcome To Roberto Horse Riding</h5>
                        <h3>Our kingdom For A Horse</h3>
                        <p>A Horse Is Worth More Than Riches</p>
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
                        <h5>Best Equestrian Club</h5>
                        <h3>Way To Challenge Is On Horseback</h3>
                        <p>Horses Lend Us The Wings We Lack</p>
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
                        <h5>Just Ride With us</h5>
                        <h3>Our Horses Feeds Your Souls</h3>
                        <p>Horse Racing Is Waning In Popularity.</p>
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
        <!-- Main Carousel /-  -->
    </div>
    <!-- Photo Slider /- -->
</template>

<script>
export default {};
</script>

<style scoped>
</style>

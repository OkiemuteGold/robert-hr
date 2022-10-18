<template>
    <header class="header-main container-fluid no-padding">
        <!-- Container -->
        <div class="container">
            <!-- Navigation -->
            <nav class="navbar ow-navigation">
                <div class="col-md-2 col-sm-12 col-xs-12 logo-block">
                    <router-link :to="{ name: 'Home' }" aria-label="Home">
                        <img src="@/assets/images/logo.png" alt="logo" />
                    </router-link>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="top-header">
                        <h3>Welcome to Roberto Horse Riding</h3>
                        <ul class="pull-right">
                            <li>
                                <a href="#" title="Facebook"
                                    ><i
                                        class="fa fa-facebook"
                                        aria-hidden="true"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href="#" title="Twitter"
                                    ><i
                                        class="fa fa-twitter"
                                        aria-hidden="true"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href="#" title="Google"
                                    ><i
                                        class="fa fa-google-plus"
                                        aria-hidden="true"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href="#" title="Linkedin"
                                    ><i
                                        class="fa fa-linkedin"
                                        aria-hidden="true"
                                    ></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-block">
                        <div class="navbar-header">
                            <button
                                type="button"
                                class="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar"
                            >
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a
                                class="navbar-brand"
                                href="#index.html"
                                title="Logo"
                                ><span>Roberto HR</span></a
                            >
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li>
                                    <router-link
                                        :to="{ name: 'Home' }"
                                        exact
                                        aria-label="Home"
                                        >Home</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'About' }"
                                        aria-label="About"
                                        >About Us</router-link
                                    >
                                </li>
                                <li class="dropdown">
                                    <router-link
                                        :to="{ name: 'Studs' }"
                                        aria-label="Studs"
                                        class="dropdown-toggle"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        >Studs</router-link
                                    >
                                    <i class="ddl-switch fa fa-angle-down"></i>
                                    <ul class="dropdown-menu">
                                        <!-- <li
                                            v-for="(
                                                route, index
                                            ) in studDropdownRoutes"
                                            :key="index"
                                        >
                                            <router-link
                                                :to="route.link"
                                                :aria-label="route.name"
                                                >{{ route.name }}</router-link
                                            >
                                        </li> -->

                                        <li>
                                            <router-link
                                                :to="{ name: 'Studs01' }"
                                                aria-label="Studs01"
                                                >Studs01</router-link
                                            >
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{ name: 'Studs02' }"
                                                aria-label="Studs02"
                                                >Studs02</router-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'Gallery' }"
                                        aria-label="Gallery"
                                        >Gallery</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'Contact' }"
                                        aria-label="Contact"
                                        >Contact Us</router-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-1 col-sm-12 col-xs-12 text-right search-block"
                >
                    <div class="menu-search">
                        <div id="sb-search" class="sb-search">
                            <form>
                                <input
                                    class="sb-search-input"
                                    placeholder="Enter your search term..."
                                    type="text"
                                    value=""
                                    name="search"
                                    id="search"
                                />
                                <button class="sb-search-submit">
                                    <i class="fa fa-search"></i>
                                </button>
                                <span class="sb-icon-search"></span>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navigation -->
        </div>
        <!-- Container /- -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            // studDropdownRoutes: [
            //     {
            //         name: "Stud01",
            //         link: "/studs/stud01",
            //     },
            //     {
            //         name: "Stud02",
            //     },
            // ],
        };
    },
};
</script>

<style>
</style>
<template>
    <header class="header-main container-fluid no-padding">
        <div class="container">
            <div class="row">
                <nav class="navbar ow-navigation">
                    <div class="col-md-3 col-sm-12 col-xs-12 logo-block">
                        <router-link :to="{ name: 'Home' }" aria-label="Home">
                            <img src="@/assets/images/logo.png" alt="logo" />
                            <span>Roberto Logo</span>
                        </router-link>
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="top-header">
                            <h3>Welcome to Yeguada Fernández Millares</h3>

                            <!-- <ul class="pull-right">
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
                            </ul> -->
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
                                    <span class="sr-only"
                                        >Toggle navigation</span
                                    >
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>

                                <router-link
                                    :to="{ name: 'Home' }"
                                    aria-label="Home"
                                    class="navbar-brand"
                                >
                                    <span>Roberto HR</span>
                                </router-link>
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
                                        <i
                                            class="ddl-switch fa fa-angle-down"
                                        ></i>
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
                                                    :to="{ name: 'Stallion' }"
                                                    aria-label="Stallion"
                                                    >Stallion</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    :to="{ name: 'Mares' }"
                                                    aria-label="Mares"
                                                    >Mares</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    :to="{ name: 'Foals' }"
                                                    aria-label="Foals"
                                                    >Foals</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    :to="{ name: 'Fillies' }"
                                                    aria-label="Fillies"
                                                    >Fillies</router-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ name: 'Services' }"
                                            aria-label="Services"
                                            >Services</router-link
                                        >
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
                        class="
                            col-md-1 col-sm-12 col-xs-12
                            text-right
                            search-block
                        "
                    >
                        <div class="whatsapp">
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="fa fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
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

<style scoped>
.whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.navbar-fixed-top .whatsapp {
    margin-top: 22px;
}

.whatsapp a {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #eaeaea;
    border: 1px solid #666;
    border-radius: 100%;
    text-decoration: none;
    -o-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
}

.whatsapp a i {
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.whatsapp a:hover {
    border-color: #eaeaea;
}

.whatsapp a:hover i {
    color: var(--yellowLight);
}

.ow-navigation .logo-block {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
}

.ow-navigation .logo-block img {
    text-align: center;
}

@media (min-width: 768px) {
    .top-header::after {
        width: 100%;
    }

    .header-main .navbar .col-md-8::after,
    .header-main .navbar .col-md-8::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        display: inline-block;
        background-color: #343434;
    }

    .header-main .navbar .col-md-8::before {
        left: 0;
    }

    /* .header-main .navbar .col-md-8::after {
        display: none;
    } */

    .ow-navigation .logo-block span {
        display: none;
    }

    .navbar-fixed-top .ow-navigation .logo-block span {
        display: block;
    }

    .top-header {
        padding: 10px 25px 10px 25px;
    }

    .navbar-nav {
        padding-left: 25px;
        padding-right: 25px;
    }

    .top-header h3 {
        display: block;
        text-align: right;
    }

    .top-header ul {
        display: none;
    }

    .navbar-nav {
        float: right;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .navbar-fixed-top .ow-navigation .nav.navbar-nav > li {
        margin: 0 16px;
    }
}

@media screen and (min-width: 1200px) {
    .navbar-fixed-top .ow-navigation .nav.navbar-nav > li {
        margin: 0 22px;
    }
}

@media (max-width: 991px) {
    .header-main .navbar .col-md-8::after,
    .header-main .navbar .col-md-8::before {
        display: none;
    }

    .top-header {
        /* margin-bottom: 0; */
        display: none;
    }

    .header-main .search-block {
        display: none;
    }
}
</style>
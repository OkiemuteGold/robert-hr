<template>
    <transition name="fade">
        <div class="page_processing_modal" v-if="actionProcessing">
            <div class="page_processing_card">
                <div class="text-center">
                    <img src="@/assets/logo.png" class="loading logo" />

                    <p>Please wait...</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["actionProcessing"]),
    },
};
</script>

<style scoped>
.page_processing_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(94, 99, 95, 0.85);
    overflow: hidden;
    z-index: 110009;
    -o-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
}

.page_processing_card {
    position: relative;
    width: 290px;
    height: 180px;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    /* border-radius: 20px; */
    text-align: center;
}

.page_processing_card p {
    font-size: 15px;
    font-weight: 500;
    margin: 80px 0 0;
    padding: 0;
    color: var(--white);
}

.page_processing_card img {
    height: 80px;
    width: 80px;
    -o-object-fit: contain;
    object-fit: contain;
    -o-animation: scaleInOut 1.5s infinite linear;
    -moz-animation: scaleInOut 1.5s infinite linear;
    -webkit-animation: scaleInOut 1.5s infinite linear;
    animation: scaleInOut 1.5s infinite linear;
}

@-o-keyframes scaleInOut {
    0% {
        -o-transform: scale(1);
    }
    52% {
        -o-transform: scale(1.35);
    }
    100% {
        -o-transform: scale(1);
    }
}

@-ms-keyframes scaleInOut {
    0% {
        -ms-transform: scale(1);
    }
    52% {
        -ms-transform: scale(1.35);
    }
    100% {
        -ms-transform: scale(1);
    }
}

@-moz-keyframes scaleInOut {
    0% {
        -moz-transform: scale(1);
    }
    52% {
        -moz-transform: scale(1.35);
    }
    100% {
        -moz-transform: scale(1);
    }
}

@-webkit-keyframes scaleInOut {
    0% {
        -webkit-transform: scale(1);
    }
    52% {
        -webkit-transform: scale(1.35);
    }
    100% {
        -webkit-transform: scale(1);
    }
}

@keyframes scaleInOut {
    0% {
        transform: scale(1);
    }
    52% {
        transform: scale(1.35);
    }
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 350px) {
    .page_processing_card {
        width: 95%;
        margin: auto;
    }
}
</style>

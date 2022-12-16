<template>
    <transition name="fade">
        <div class="page_processing_modal" v-if="alertModalStatus">
            <div class="page_processing_card">
                <div
                    class="message_stat"
                    :class="
                        alertModalType == 'success'
                            ? 'text-success'
                            : 'text-danger'
                    "
                >
                    <h4>Delivery Status</h4>
                </div>
                <p
                    :class="
                        alertModalType == 'success'
                            ? 'text-dark'
                            : 'text-danger'
                    "
                >
                    {{ alertModalMessage }}
                </p>
                <button
                    class="btn"
                    :class="
                        alertModalType == 'success'
                            ? 'btn-success '
                            : 'btn-danger'
                    "
                    @click="setalertModalStatus"
                >
                    Okay
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["alertModalMessage", "alertModalType"]),
        ...mapState(["alertModalStatus"]),
    },

    methods: {
        ...mapActions(["setAlertModalStatus"]),
        setalertModalStatus: function () {
            this.setAlertModalStatus({
                type: "",
                status: false,
                message: "",
            });
        },
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
    background: rgba(94, 99, 95, 0.85);
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 69990;
    -o-transition: 0.8s ease;
    -moz-transition: 0.8s ease;
    -webkit-transition: 0.8s ease;
    transition: 0.8s ease;
}

.page_processing_card {
    width: 320px;
    height: 230px;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    border-radius: 20px;
    box-shadow: 3px 6px 10px 0 rgb(0 102 245 / 7%);
    padding: 20px;
    text-align: center;
}

.page_processing_card h4 {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
}

.page_processing_card p {
    font-size: 18px;
    margin-bottom: 25px;
}

.page_processing_card button {
    width: 38%;
    font-weight: 500;
    cursor: pointer;
    background: var(--yellowLight);
    border: 2px solid transparent;
    outline: none;
    color: var(--white);
}

.page_processing_card button:hover {
    background: var(--white);
    color: var(--yellowLight);
    border-color: var(--yellowLight);
}

.page_processing_card img {
    width: 50px;
}

.message_stat {
    /* border-radius: 50%; */
    padding: 13px 15px 10;
}

/* .message_stat .fa {
    font-size: 20px;
} */

@media screen and (max-width: 350px) {
    .page_processing_card {
        width: 95%;
        margin: auto;
    }
}
</style>

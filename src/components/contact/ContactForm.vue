<template>
    <form @submit.prevent="submitForm" class="contact-form">
        <div class="row">
            <div class="col-sm-12">
                <div class="form-group">
                    <p>All fields marked <span>*</span> are required</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="input_name">Full name <span>*</span></label>
                    <!-- :class="[
                        'form-control',
                        errors.email ? 'invalid' : '',
                    ]" -->
                    <input
                        type="text"
                        id="input_name"
                        name="input_name"
                        :class="['form-control', form.name ? 'valid' : '']"
                        placeholder="Your Name"
                        aria-placeholder="Your Name"
                        aria-required="true"
                        v-model="form.name"
                        @input="checkName"
                    />
                    <p class="error" v-show="errors.name">
                        Kindly enter your name
                    </p>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="input_email"
                        >Email address <span>*</span></label
                    >
                    <input
                        type="email"
                        id="input_email"
                        name="input_email"
                        :class="['form-control', form.email ? 'valid' : '']"
                        placeholder="Your e-mail"
                        aria-placeholder="Your e-mail"
                        aria-required="true"
                        v-model="form.email"
                        @input="checkEmail"
                    />
                    <p class="error" v-show="errors.email">
                        {{ errorMessage }}
                    </p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="input_phone">Phone number</label>
                    <input
                        type="number"
                        id="input_phone"
                        name="input_phone"
                        :class="['form-control', form.phone ? 'valid' : '']"
                        placeholder="Phone number"
                        aria-placeholder="Phone number"
                        min="0"
                        v-model="form.phone"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="input_subject">Subject</label>
                    <input
                        type="text"
                        id="input_subject"
                        name="input_subject"
                        :class="['form-control', form.subject ? 'valid' : '']"
                        placeholder="Subject"
                        aria-placeholder="Subject"
                        v-model="form.subject"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="form-group">
                    <label for="textarea_message">Message <span>*</span></label>
                    <textarea
                        id="textarea_message"
                        name="textarea_message"
                        :class="['form-control', form.message ? 'valid' : '']"
                        rows="4"
                        placeholder="Message"
                        aria-placeholder="Message"
                        aria-required="true"
                        v-model="form.message"
                        @input="checkMessage"
                    ></textarea>
                    <p class="error" v-show="errors.message">
                        Please enter a brief message
                    </p>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="form-group">
                    <input
                        type="submit"
                        id="btn_submit"
                        name="btn_submit"
                        value="Send Message"
                        class="text-center"
                        title="Send Message"
                    />
                </div>
            </div>
            <!-- <div class="alert-msg" id="alert-msg"></div> -->
        </div>
    </form>
</template>

<script>
import "@/mixins";

export default {
    computed: {
        isValid() {
            return (
                this.form.name !== "" &&
                this.form.email !== "" &&
                this.form.message !== "" &&
                this.errors.name === false &&
                this.errors.email === false &&
                this.errors.message === false
            );
        },
    },

    data() {
        return {
            isSubmitting: false,
            errorMessage: null,

            form: {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            },

            errors: {
                name: false,
                email: false,
                message: false,
            },
        };
    },

    methods: {
        clearFields() {
            this.form = {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            };
        },

        checkName() {
            const value = this.form.name;

            if (!value || value === "") {
                this.errors.name = true;
            } else {
                this.errors.name = false;
            }
        },

        checkEmail() {
            const value = this.form.email;

            const isValid = this.validEmail(value);

            if (!value || value === "") {
                this.errors.email = true;
                this.errorMessage = "Please enter your email address";
            } else if (!isValid) {
                this.errors.email = true;
                this.errorMessage = "Email address must be valid!";
            } else {
                this.errors.email = false;
            }
        },

        checkMessage() {
            const value = this.form.message;

            if (!value || value === "") {
                this.errors.message = true;
            } else {
                this.errors.message = false;
            }
        },

        // addValidClass(e) {
        //     // console.log(e);
        //     const input = e.target,
        //         placeholder = e.target.placeholder,
        //         value = e.target.value,
        //         validInput = e.target.validity.valid;

        //     if (value !== null && validInput !== true) {
        //         this.errorMessage = placeholder + " must be valid!";
        //         input.classList.add("invalid");
        //     } else {
        //         input.classList.add("valid");
        //     }
        // },

        submitForm() {
            this.checkName();
            this.checkEmail();
            this.checkMessage();

            if (this.isValid) {
                this.setActionLoading(true);

                setTimeout(() => {
                    this.setActionLoading(false);
                    let payload;

                    payload = {
                        status: true,
                        type: "success",
                        message: "Message Sent! We will notify you shortly.",
                    };

                    console.log(this.form);

                    this.clearFields();
                    this.setAlertModalStatus(payload);
                }, 2000);
            }
        },
    },

    // mounted() {},
};
</script>

<style scoped>
.contact-form {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
}

.contact-form .form-group {
    margin-bottom: 0;
    padding-bottom: 25px;
}

.form-control {
    border-color: #ececec;
}

.form-control:focus,
.form-control.valid,
.form-control:active {
    border-color: #ccc;
}

.form-control.invalid {
    border-color: var(--error);
}

.contact-form .form-group p {
    font-size: 14px;
    margin: 0;
}

.contact-form .form-group p:not(.error) {
    font-family: "Crimson Text", serif;
    font-style: italic;
    color: #444;
    letter-spacing: 1.36px;
    text-decoration: underline;
    text-decoration-skip-ink: all;
}

.contact-form .form-group label {
    font-family: "montserratlight";
    font-weight: normal;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    color: #444;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
}

textarea {
    resize: vertical;
    max-height: 150px;
    margin-bottom: 0;
}

.contact-form .form-group p.error {
    font-size: 13px;
    margin-top: 10px;
    letter-spacing: 0.5px;
}

.contact-form .form-group p.error,
.contact-form .form-group p span,
.contact-form .form-group label span {
    color: var(--error);
}

.contact-form .form-group input {
    margin: 0;
}
</style>
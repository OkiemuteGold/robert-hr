<template>
    <form @submit.prevent="submitForm" class="contact-form">
        <div class="row">
            <div class="form-group col-sm-12">
                <p>All fields marked <span>*</span> are required</p>
            </div>

            <div class="form-group col-sm-6">
                <label for="input_name">Full name <span>*</span></label>
                <input
                    type="text"
                    id="input_name"
                    name="input_name"
                    class="form-control"
                    placeholder="Your Name"
                    required
                    v-model.lazy="form.name"
                    @change="addValidClass"
                />
                <div class="error" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
            </div>
            <div class="form-group col-sm-6">
                <label for="input_email">Email address <span>*</span></label>
                <input
                    type="email"
                    id="input_email"
                    name="input_email"
                    class="form-control"
                    placeholder="Your e-mail"
                    required
                    v-model.lazy="form.email"
                    @change="addValidClass"
                />
                <div class="error" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
            </div>
            <div class="form-group col-sm-6">
                <label for="input_phone">Phone number</label>
                <input
                    type="text"
                    id="input_phone"
                    name="input_phone"
                    class="form-control"
                    placeholder="Phone"
                    v-model.lazy="form.phone"
                    @change="addValidClass"
                />
            </div>
            <div class="form-group col-sm-6">
                <label for="input_subject">Subject</label>
                <input
                    type="text"
                    id="input_subject"
                    name="input_subject"
                    class="form-control"
                    placeholder="Subject"
                    v-model.lazy="form.subject"
                    @change="addValidClass"
                />
                <div class="error" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
            </div>
            <div class="form-group col-sm-12">
                <label for="textarea_message">Message <span>*</span></label>
                <textarea
                    id="textarea_message"
                    name="textarea_message"
                    class="form-control"
                    rows="5"
                    placeholder="Message"
                    v-model.lazy="form.message"
                    @change="addValidClass"
                ></textarea>
                <div class="error" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
            </div>

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
            <!-- <div class="alert-msg" id="alert-msg"></div> -->
        </div>
    </form>
</template>

<script>
export default {
    computed: {
        isValid() {
            return this.form !== null;
        },
    },

    data() {
        return {
            errorMessage: null,
            form: {
                name: null,
                phone: null,
                email: null,
                subject: null,
                message: null,
            },
        };
    },

    methods: {
        addValidClass(e) {
            // console.log(e);
            const input = e.target,
                placeholder = e.target.placeholder,
                value = e.target.value,
                validInput = e.target.validity.valid;

            if (value !== null && validInput !== true) {
                this.errorMessage = placeholder + " must be valid!";
                input.classList.add("invalid");
            } else {
                input.classList.add("valid");
            }
        },

        submitForm() {
            console.log(this.form);
        },
    },
};
</script>

<style scoped>
.contact-form {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
}

.contact-us .form-group {
    margin-bottom: 25px;
}

.form-control:focus,
.form-control.valid,
.form-control:active {
    border-color: #ccc;
}

.form-control.invalid {
    border-color: var(--error);
}

.contact-us .form-group p {
    font-family: "Crimson Text", serif;
    font-size: 13px;
    font-style: italic;
    color: #444;
    margin: 0;
    letter-spacing: 1.36px;
    text-decoration: underline;
    text-decoration-skip-ink: all;
}

.contact-us .form-group label {
    font-family: "montserratlight";
    font-weight: normal;
    font-size: 13px;
    display: inline-block;
    width: 100%;
    color: #444;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
}

.error,
.contact-us .form-group p span,
.contact-us .form-group label span {
    color: var(--error);
}
</style>
<template>
    <base-card>
        <form v-on:submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">{{ $t('email') }}</label>
                <input type="text" id="email" v-model.trim="form.email">
                <p v-if="!emailIsValid" class="errors">Your e-mail is required</p>
            </div>
            <div class="form-control">
                <label for="password">{{ $t('password') }}</label>
                <input type="password" id="password" v-model.trim="form.password">
                <p v-if="!passwordIsValid" class="errors">Password is required</p>
            </div>
            <button :disabled="!formIsValid" type="submit" class="btn btn-primary">{{ $t('login') }}</button>
            </form>
    </base-card>
</template>

<script>
import { signIn } from "../auth";

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        submitForm() {
            if (this.formIsValid) {
                console.log('form is valid', this.form)
                signIn(this.form.email, this.form.password)
                    .then(() => {
                        this.$router.replace('/history');
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            } else {
                console.log('form is invalid')
            }
        }
    },

    computed: {
        emailIsValid() {
            return !!this.form.email;
        },
        passwordIsValid() {
            return this.form.password.length > 6;
        },
        formIsValid() {
            return this.emailIsValid && this.passwordIsValid;
        }
    }
}
</script>

<style scoped>
form {
text-align: center;
margin: auto;
padding: auto;
justify-content: center;
}
.form-control {
margin: 0.5rem 0;
border: 0;
}

label {
font-weight: bold;
display: block;
margin-bottom: 0.5rem;
}

input {
width: 20rem;
border: 1px solid #ccc;
border-radius: 8px;
font: inherit;
margin-right: auto;
margin-left: auto;
margin: 0.5rem 0;
}

input[type='checkbox'] {
display: inline;
width: auto;
border: none;
}

a {
display: contents;
}

button {
padding: 5px auto;
max-width: fit-content;
margin: auto;
}

.errors {
  color: red;
  font-weight: bold;
}
</style>

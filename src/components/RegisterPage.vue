<template>
    <base-card>
       <form v-on:submit.prevent="submitForm">
        <div class="form-control">
            <label for="full name">{{ $t('fullName') }}</label>
            <input type="text" id="full name" v-model.trim="form.fullName">
            <p v-if="!fullNameIsValid" class="errors">Full Name is required</p>
        </div>
        <div class="form-control">
            <label for="email">{{ $t('email') }}</label>
            <input type="text" id="email" v-model.trim="form.email">
            <p v-if="!emailIsValid" class="errors">Your E-mail is required</p>
        </div>
        <div class="form-control">
            <label for="password">{{ $t('password') }}</label>
            <input type="password" id="password" v-model.trim="form.password">
            <p v-if="!passwordIsValid" class="errors">Password is required</p>
        </div>
       </form>
       <button :disabled="!formIsValid" type="button" class="btn btn-primary">{{ $t('register') }}</button>
    </base-card>
</template>

<script>
export default {
    name: 'registerPage',
    
    data() {
        return {
            form: {
                fullName: null,
                email: null,
                password: null
            }
        }
    },

    methods: {
        submitForm() {
            if (this.formIsValid) {
                console.log('form is valid', this.form)
            } else {
                console.log('form is invalid')
            }

            /* this.$router.replace('/login'); */

            fetch('https://task-1-68e73-default-rtdb.europe-west1.firebasedatabase.app/register.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.fullName,
                }),
            });

        },
    },
    
    computed: {
        fullNameIsValid() {
            return !!this.form.fullName;
        },
        emailIsValid() {
            return !!this.form.email;
        },
        passwordIsValid() {
            return this.form.password > 6;
        },
        formIsValid() {
            return this.fullNameIsValid && this.emailIsValid && this.passwordIsValid;
        }
    },
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

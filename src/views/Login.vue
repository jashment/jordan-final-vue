<template>
    <v-container grid-list-md>
        <v-layout>
            <v-flex xs6 class="ma-auto">
                <v-card>
                    <div>
                    <v-form @submit.prevent="onSubmit">
                        <v-spacer></v-spacer>
                        <div class ="input" :class="{invalid: $v.email.$error}">
                            <v-text-field 
                                v-model.lazy="email"
                                :rules="emailRules" 
                                label="E-mail" 
                                @blur="$v.email.$touch()"
                                required>
                            </v-text-field>
                            <p v-if="!$v.email.email">Please provide a valid email.</p>
                        </div>
                        <v-spacer></v-spacer>
                        <v-text-field 
                            v-model.lazy="password" 
                            label="Password" 
                            :type="show1 ? 'text' : 'password'"
                            :class="{invalid: $v.password.$error}"
                            @blur="$v.password.$touch()"
                            :rules="[rules.required, rules.min]"
                            validate-on-blur="">
                        </v-text-field>
                        <v-btn type="submit">Submit</v-btn>
                        <v-btn @click="clear">Clear</v-btn>
                    </v-form>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import {required, email, minLength} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            show1: false,
            password: '',
            email: '',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            rules: {
                required: value => !!value || 'Password is Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match')
            }
        }
    },
    methods: {
        clear () {
        this.$v.$reset()
        this.email = ''
        this.password = ''
        },
        onSubmit() {
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            console.log(formData)
            this.$store.dispatch('login', {email: formData.email, password: formData.password})
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLen: minLength(6)
        }
    }
}
</script>

<style scoped>
    div {
        padding: .5em;
    }
</style>

<template>
    <v-container grid-list-md>
        <v-layout>
            <v-flex xs6 class="ma-auto">
                <v-card>
                    <div>
                    <v-form>
                        <v-text-field 
                            v-model="name" 
                            :rules="nameRules" 
                            :counter="10" 
                            label="Name" 
                            required>
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <div class ="input" :class="{invalid: $v.email.$error}">
                            <v-text-field 
                                v-model="email" 
                                :rules="emailRules" 
                                label="E-mail" 
                                @input="$v.email.$touch()"
                                required>
                            </v-text-field>
                            <p v-if="!$v.email.email">Please provide a valid email.</p>
                        </div>
                        <v-spacer></v-spacer>
                        <v-text-field 
                            v-model="password" 
                            label="Password" 
                            :type="show1 ? 'text' : 'password'"
                            :class="{invalid: $v.password.$error}"
                            @input="$v.password.$touch()">
                        </v-text-field>
                        <v-btn @click="clear">clear</v-btn>
                    </v-form>
                    </div>
                </v-card>
            </v-flex>
            <p>{{email}}</p>
            <p>{{password}}</p>
        </v-layout>
    </v-container>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            show1: false,
            password: '',
            email: ''
        }
    },
    methods: {
        clear () {
            this.$refs.form.reset();
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
    .input.invalid div {
        background-color: red;
    }
</style>

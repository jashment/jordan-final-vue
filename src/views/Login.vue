<template>
    <v-container grid-list-md>
        <v-layout>
            <v-flex xs6 class="ma-auto">
                <v-card>
                    <div>
                    <v-form>
                        <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="password" label="Password" :type="show1 ? 'text' : 'password'"></v-text-field>
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
    }
}
</script>

<style scoped>
    div {
        padding: .5em;
    }
</style>

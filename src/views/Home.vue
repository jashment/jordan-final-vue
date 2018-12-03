<template>
<v-app dark>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
          <div style="text-align: center;">
            <h1 class="animated infinite flash slower">Welcome to a Star Wars Guide</h1>
            <p v-if="!auth">Please Login or Sign Up to View Content</p>
          </div>
      </v-layout>
    </v-slide-y-transition>
    <v-img class="animated fadeIn" v-box-shadow src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/3B1EMIOKH5.jpg" height="400" position="100% 20%"></v-img>
    <v-container grid-list-xl v-if="auth">
      <v-layout>
        <v-flex xs4>
          <v-card hover to="/people">
            <v-card-title>
                People
            </v-card-title>
          </v-card>
        </v-flex>
            <v-divider></v-divider>
        <v-flex xs4>
          <v-card hover to="/planets">
            <v-card-title>
              Planets
            </v-card-title>
            </v-card>
        </v-flex>
            <v-divider></v-divider>
        <v-flex xs4>
          <v-card hover to="/species">
            <v-card-title>
              Species
            </v-card-title>
            </v-card>
        </v-flex>
            <v-divider></v-divider>
        <v-flex xs4>
          <v-card hover to="/starships">
            <v-card-title>
              Starships
            </v-card-title>
            </v-card>
        </v-flex>
            <v-divider></v-divider>
        <v-flex xs4>
          <v-card hover to="/vehicles">
            <v-card-title>
              Vehicles
            </v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  <aboutInfo/>
  </v-container>
</v-app>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      height: 100
    }
  },
  created() {
    this.$store.dispatch('fetchUser')
    this.$store.dispatch('autoLogin')
  },
  computed: {
    auth() {
      return this.$store.getters.authenticatedUser
    }
  },
  components: {
    
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

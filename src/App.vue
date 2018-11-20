<template>
  <v-app dark>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
          <v-card hover v-if="auth">
            <router-link to="/people">People</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover v-if="auth">
            <router-link to="/planets">Planets</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover v-if="auth">
            <router-link to="/species">Species</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover v-if="auth">
            <router-link to="/starships">Starships</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover v-if="auth">
            <router-link to="/vehicles">Vehicles</router-link>
          </v-card>
          <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>Navigation
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="!auth" to="/login">Sign In</v-btn>
        <v-btn v-if="!auth" to="/signup">Sign Up</v-btn>
        <v-btn v-if="auth" @click="onLogout">Logout</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    <v-content>
      <v-card-action>
        <v-btn extended>Search</v-btn>
        <input v-model="filterText">
      </v-card-action>
      <h1 style="text-align: center;">Welcome Authenticated User!</h1>
      <p>Your email address: {{email}}</p>
      <router-view/>

    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import People from './views/People.vue'
import Starships from './views/Starships.vue'
import Vehicles from './views/Vehicles.vue'
import Planets from './views/Planets.vue'
import Species from './views/Species.vue'
import Signup from './views/Signup.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [{
        icon: 'mdi-chart-bubble',
        title: 'Contents',

      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Final Project',
      filterText: ''
    }
  },
  components: {
    HelloWorld,
    People,
    Starships,
    Vehicles,
    Planets,
    Species
  },
  created() {
    this.$store.dispatch('fetchUser')
    this.$store.dispatch('autoLogin')
  },
  computed: {
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    },
    auth() {
      return this.$store.getters.authenticatedUser
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
    div {
      padding: 1em;
    }
</style>

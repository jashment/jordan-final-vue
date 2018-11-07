<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-card hover>
            <router-link to="/login">Login</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover>
            <router-link to="/people">People</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover>
            <router-link to="/planets">Planets</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover>
            <router-link to="/species">Species</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover>
            <router-link to="/starships">Starships</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card hover>
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

    </v-toolbar>
    <v-content>
      <v-card-action>
        <v-btn extended>Search</v-btn>
        <input v-model="filterText">
      </v-card-action>
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

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
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
  computed: {

  }
}
</script>

<style scoped>
    div {
      padding: 1em;
    }
</style>

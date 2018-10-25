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
          <v-card>
            <router-link to="/people">People</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <router-link to="/planets">Planets</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <router-link to="/species">Species</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <router-link to="/starships">Starships</router-link>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <router-link to="/vehicles">Vehicles</router-link>
          </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-card-action>
        <v-btn>Search</v-btn>
      </v-card-action>
      <router-view/>
      <HelloWorld style="text-align: center;"/>

    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>mdi-arrows-left-right-bold-outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
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
      title: 'Final Project'
    }
  },
  components: {
    HelloWorld,
    People,
    Starships,
    Vehicles,
    Planets,
    Species
  }
}
</script>

<style scoped>
    div {
      padding: 1em;
    }
</style>

<template>
  <v-app>
    <div>
      <span>
        <router-link to="/home">Home</router-link>
      </span>
      <span>
        <router-link to="/login">Login</router-link>
        </span>
      <span>
        <router-link to="/about">About</router-link>
      </span>
    </div>
    <router-view></router-view>
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
        title: 'Inspire'
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
    text-align: center;
  }
  span {
    padding: 1em;
  }
</style>

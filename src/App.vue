<template>
  <v-app dark>
    <div>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Swapi from './views/Swapi.vue'
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
    Swapi,
    Starships,
    Vehicles,
    Planets,
    Species
  }
}
</script>

<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="planets in allPlanets" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group>
                      <div>Rotation Period: {{planets.rotation_period}}</div>
                      <span>Orbital Period: {{planets.orbital_period}}</span>
                      <div>Diameter: {{planets.diameter}}</div>
                      <div>Climate: {{planets.climate}}</div>
                      <div>Gravity: {{planets.gravity}}</div>
                      <div>Terrain: {{planets.terrain}}</div>
                      <div>Surface Water: {{planets.surface_water}}</div>
                      <div>Population: {{planets.population}}</div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
import {Mixins} from '../assets/Mixins.js';

export default {
  mixins: [Mixins]
}
</script>

<style>

</style>

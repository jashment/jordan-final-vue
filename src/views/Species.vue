<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="species in allSpecies" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{species.name}}</h3>
                    <hr>
                    <v-list-group>
                      <div>Classification: {{species.classification}}</div>
                      <span>Designation: {{species.designation}}</span>
                      <div>Average Height: {{species.average_height}}</div>
                      <div>Skin Colors: {{species.skin_colors}}</div>
                      <div>Hair Colors: {{species.hair_colors}}</div>
                      <div>Eye Colors: {{species.eye_colors}}</div>
                      <div>Average Lifespan: {{species.average_lifespan}}</div>
                      <div>Language: {{species.language}}</div>
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
import {people} from '../assets/people';
import {planets} from '../assets/planets';
import {starships} from '../assets/starships';
import {vehicles} from '../assets/vehicles';
import {species} from '../assets/species';
export default {
    data () {
        return {
            allPeople: people,
            allPlanets: planets,
            allStarships: starships,
            allVehicles: vehicles,
            allSpecies: species,
            info: null
        }
    },
    created () {
        console.log(people);
    },
    mounted() {
    axios.get("https://swapi.co/api/species")
    .then(response => {this.info = response.data})
  }
}
</script>

<style>

</style>

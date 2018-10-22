<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="starships in allStarships" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list-group>
                      <div>Model: {{starships.model}}</div>
                      <span>Manufacturer: {{starships.manufacturer}}</span>
                      <div>Cost in Credits: {{starships.cost_in_credits}}</div>
                      <div>Length: {{starships.length}}</div>
                      <div>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</div>
                      <div>Crew: {{starships.crew}}</div>
                      <div>Starship Class: {{starships.starship_class}}</div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>


        <v-list three-line>
          <v-list-group>
          <template v-for="people in allPeople">
            <v-subheader
              v-if="people.name"
              :key="people.name"
            >
              {{ people.name }}
            </v-subheader>

            <v-subheader
              v-if="people.gender"
              :key="people.gender"
            >
              {{ people.gender }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="people"
            ></v-divider>

            <v-list-tile
              v-else
              :key="people.height"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="people.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="people.mass"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
import {people} from '../assets/people';
import {planets} from '../assets/planets';
import {starships} from '../assets/starships';
export default {
    data () {
        return {
            allPeople: people,
            allPlanets: planets,
            allStarships: starships,
            info: null
        }
    },
    created () {
        console.log(people);
    },
    mounted() {
    axios.get("https://swapi.co/api/starships")
    .then(response => {this.info = response.data})
  }
}
</script>

<style>

</style>

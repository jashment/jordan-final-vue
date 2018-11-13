<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="people in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Height: {{people.height}}</div>
                        <div>Mass: {{people.mass}}</div>
                        <span>Birth Year: {{people.birth_year}}</span>
                        <div>Hair Color: {{people.hair_color}}</div>
                        <div>Skin Color: {{people.skin_color}}</div>
                        <div>Eye Color: {{people.eye_color}}</div>
                        <div>Gender: {{people.gender}}</div>
                        <div>Homeworld: {{people.homeworld}}</div>
                      </div>
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
import axios from 'axios'
import {Mixins} from '../assets/Mixins.js';
export default {
  data () {
    return {
      SWArray: []
    }
  },
    mixins: [Mixins],
    created () {
        console.log(people);
    },
    mounted() {
    axios
        .get("/people")
        .then(response => (this.SWArray = response.data.results))
        console.log(SWArray)
  }
}
</script>

<style>

</style>

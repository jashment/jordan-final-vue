<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="species in SWArray" :key="`1${i}`" xs4>
              <v-card hover>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{species.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Classification: {{species.classification}}</div>
                        <span>Designation: {{species.designation}}</span>
                        <div>Average Height: {{species.average_height}}</div>
                        <div>Skin Colors: {{species.skin_colors}}</div>
                        <div>Hair Colors: {{species.hair_colors}}</div>
                        <div>Eye Colors: {{species.eye_colors}}</div>
                        <div>Average Lifespan: {{species.average_lifespan}}</div>
                        <div>Language: {{species.language}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="species in SWArray2" :key="`1${i}`" xs4>
              <v-card hover>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{species.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Classification: {{species.classification}}</div>
                        <span>Designation: {{species.designation}}</span>
                        <div>Average Height: {{species.average_height}}</div>
                        <div>Skin Colors: {{species.skin_colors}}</div>
                        <div>Hair Colors: {{species.hair_colors}}</div>
                        <div>Eye Colors: {{species.eye_colors}}</div>
                        <div>Average Lifespan: {{species.average_lifespan}}</div>
                        <div>Language: {{species.language}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="species in SWArray3" :key="`1${i}`" xs4>
              <v-card hover>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{species.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Classification: {{species.classification}}</div>
                        <span>Designation: {{species.designation}}</span>
                        <div>Average Height: {{species.average_height}}</div>
                        <div>Skin Colors: {{species.skin_colors}}</div>
                        <div>Hair Colors: {{species.hair_colors}}</div>
                        <div>Eye Colors: {{species.eye_colors}}</div>
                        <div>Average Lifespan: {{species.average_lifespan}}</div>
                        <div>Language: {{species.language}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="species in SWArray4" :key="`1${i}`" xs4>
              <v-card hover>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{species.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Classification: {{species.classification}}</div>
                        <span>Designation: {{species.designation}}</span>
                        <div>Average Height: {{species.average_height}}</div>
                        <div>Skin Colors: {{species.skin_colors}}</div>
                        <div>Hair Colors: {{species.hair_colors}}</div>
                        <div>Eye Colors: {{species.eye_colors}}</div>
                        <div>Average Lifespan: {{species.average_lifespan}}</div>
                        <div>Language: {{species.language}}</div>
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
import axios from 'axios';
import {Mixins} from '../assets/Mixins.js';
export default {
  data () {
    return {
      SWArray: [],
      SWArray2: [],
      SWArray3: [],
      SWArray4: []
    }
  },
  mixins: [Mixins],
    created () {
        console.log(species);
    },
    mounted() {
    axios.get("species/?page=1")
    .then(response => {this.SWArray = response.data.results}),
    axios.get("species/?page=2")
    .then(response => {this.SWArray2 = response.data.results}),
    axios.get("species/?page=3")
    .then(response => {this.SWArray3 = response.data.results}),
    axios.get("species/?page=4")
    .then(response => {this.SWArray4 = response.data.results})
  }
}
</script>

<style>

</style>

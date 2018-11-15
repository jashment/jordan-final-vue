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
                        <v-list-tile>Classification: {{species.classification}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Designation: {{species.designation}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Height: {{species.average_height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Colors: {{species.skin_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Colors: {{species.hair_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Colors: {{species.eye_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Lifespan: {{species.average_lifespan}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Language: {{species.language}}</v-list-tile>
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
                        <v-list-tile>Classification: {{species.classification}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Designation: {{species.designation}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Height: {{species.average_height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Colors: {{species.skin_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Colors: {{species.hair_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Colors: {{species.eye_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Lifespan: {{species.average_lifespan}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Language: {{species.language}}</v-list-tile>
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
                        <v-list-tile>Classification: {{species.classification}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Designation: {{species.designation}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Height: {{species.average_height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Colors: {{species.skin_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Colors: {{species.hair_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Colors: {{species.eye_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Lifespan: {{species.average_lifespan}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Language: {{species.language}}</v-list-tile>
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
                        <v-list-tile>Classification: {{species.classification}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Designation: {{species.designation}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Height: {{species.average_height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Colors: {{species.skin_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Colors: {{species.hair_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Colors: {{species.eye_colors}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Average Lifespan: {{species.average_lifespan}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Language: {{species.language}}</v-list-tile>
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
import {axiosMixin3} from '../assets/AxiosMixin3.js';
export default {
  mixins: [Mixins, axiosMixin3],
    created () {
        console.log(species);
    }
}
</script>

<style>

</style>

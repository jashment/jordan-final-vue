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
import {axiosMixin} from '../assets/AxiosMixin.js';
export default {
  mixins: [Mixins, axiosMixin],
    created () {
        console.log(species);
    }
}
</script>

<style>

</style>

<template>
    <div>
      <h1 id="heading" style="text-align: center;" class="animated fadeInDown">Starships</h1>
      <br>
      <br>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="starships in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{starships.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{starships.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{starships.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{starships.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{starships.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Starship Class: {{starships.starship_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="starships in SWArray2" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group class="animated fadeInDown">
                        <v-list-tile>Model: {{starships.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{starships.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{starships.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{starships.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{starships.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Starship Class: {{starships.starship_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="starships in SWArray3" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{starships.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{starships.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{starships.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{starships.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{starships.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Starship Class: {{starships.starship_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="starships in SWArray4" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{starships.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{starships.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{starships.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{starships.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{starships.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Starship Class: {{starships.starship_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
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
import {axiosMixin4} from '../assets/AxiosMixin4.js';
export default {
  mixins: [Mixins, axiosMixin4],
    created () {
        console.log(SWArray);
    }
}
</script>

<style scoped>
  #heading {
    font-size: 4em;
  }
</style>

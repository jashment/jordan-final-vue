<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="starships in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{starships.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{starships.model}}</div>
                        <span>Manufacturer: {{starships.manufacturer}}</span>
                        <div>Cost in Credits: {{starships.cost_in_credits}}</div>
                        <div>Length: {{starships.length}}</div>
                        <div>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</div>
                        <div>Crew: {{starships.crew}}</div>
                        <div>Starship Class: {{starships.starship_class}}</div>
                      </div>
                    </v-list-group>
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
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{starships.model}}</div>
                        <span>Manufacturer: {{starships.manufacturer}}</span>
                        <div>Cost in Credits: {{starships.cost_in_credits}}</div>
                        <div>Length: {{starships.length}}</div>
                        <div>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</div>
                        <div>Crew: {{starships.crew}}</div>
                        <div>Starship Class: {{starships.starship_class}}</div>
                      </div>
                    </v-list-group>
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
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{starships.model}}</div>
                        <span>Manufacturer: {{starships.manufacturer}}</span>
                        <div>Cost in Credits: {{starships.cost_in_credits}}</div>
                        <div>Length: {{starships.length}}</div>
                        <div>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</div>
                        <div>Crew: {{starships.crew}}</div>
                        <div>Starship Class: {{starships.starship_class}}</div>
                      </div>
                    </v-list-group>
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
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{starships.model}}</div>
                        <span>Manufacturer: {{starships.manufacturer}}</span>
                        <div>Cost in Credits: {{starships.cost_in_credits}}</div>
                        <div>Length: {{starships.length}}</div>
                        <div>Max Atmosphering Speed: {{starships.max_atmosphering_speed}}</div>
                        <div>Crew: {{starships.crew}}</div>
                        <div>Starship Class: {{starships.starship_class}}</div>
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
        console.log(SWArray);
    }
}
</script>

<style>

</style>

<template>
    <div>
      <h1 id="heading" style="text-align: center;" class="animated fadeInDown">Vehicles</h1>
      <br>
      <br>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="vehicles in SWArray" :key="vehicles.name" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{vehicles.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{vehicles.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{vehicles.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{vehicles.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{vehicles.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Vehicle Class: {{vehicles.vehicle_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray2" :key="vehicles.name" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{vehicles.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{vehicles.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{vehicles.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{vehicles.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{vehicles.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Vehicle Class: {{vehicles.vehicle_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray3" :key="vehicles.name" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{vehicles.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{vehicles.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{vehicles.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{vehicles.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{vehicles.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Vehicle Class: {{vehicles.vehicle_class}}</v-list-tile>
                    </v-list-group>
                    </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray4" :key="vehicles.name" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list class="animated fadeInDown">
                    <v-list-group>
                        <v-list-tile>Model: {{vehicles.model}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Manufacturer: {{vehicles.manufacturer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Cost in Credits: {{vehicles.cost_in_credits}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Length: {{vehicles.length}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Crew: {{vehicles.crew}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Vehicle Class: {{vehicles.vehicle_class}}</v-list-tile>
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
import {axiosMixin5} from '../assets/AxiosMixin5.js';
export default {
  mixins: [Mixins, axiosMixin5],
    created () {
        console.log(people);
    }
}
</script>

<style>
  #heading {
    font-size: 4em;
  }
</style>

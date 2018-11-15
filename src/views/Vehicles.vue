<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="vehicles in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{vehicles.model}}</div>
                        <span>Manufacturer: {{vehicles.manufacturer}}</span>
                        <div>Cost in Credits: {{vehicles.cost_in_credits}}</div>
                        <div>Length: {{vehicles.length}}</div>
                        <div>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</div>
                        <div>Crew: {{vehicles.crew}}</div>
                        <div>Vehicle Class: {{vehicles.vehicle_class}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray2" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{vehicles.model}}</div>
                        <span>Manufacturer: {{vehicles.manufacturer}}</span>
                        <div>Cost in Credits: {{vehicles.cost_in_credits}}</div>
                        <div>Length: {{vehicles.length}}</div>
                        <div>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</div>
                        <div>Crew: {{vehicles.crew}}</div>
                        <div>Vehicle Class: {{vehicles.vehicle_class}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray3" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{vehicles.model}}</div>
                        <span>Manufacturer: {{vehicles.manufacturer}}</span>
                        <div>Cost in Credits: {{vehicles.cost_in_credits}}</div>
                        <div>Length: {{vehicles.length}}</div>
                        <div>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</div>
                        <div>Crew: {{vehicles.crew}}</div>
                        <div>Vehicle Class: {{vehicles.vehicle_class}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="vehicles in SWArray4" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Model: {{vehicles.model}}</div>
                        <span>Manufacturer: {{vehicles.manufacturer}}</span>
                        <div>Cost in Credits: {{vehicles.cost_in_credits}}</div>
                        <div>Length: {{vehicles.length}}</div>
                        <div>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</div>
                        <div>Crew: {{vehicles.crew}}</div>
                        <div>Vehicle Class: {{vehicles.vehicle_class}}</div>
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
        console.log(people);
    }
}
</script>

<style>

</style>

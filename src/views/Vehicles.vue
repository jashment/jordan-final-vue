<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="vehicles in allVehicles" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{vehicles.name}}</h3>
                    <hr>
                    <v-list-group>
                      <div>Model: {{vehicles.model}}</div>
                      <span>Manufacturer: {{vehicles.manufacturer}}</span>
                      <div>Cost in Credits: {{vehicles.cost_in_credits}}</div>
                      <div>Length: {{vehicles.length}}</div>
                      <div>Max Atmosphering Speed: {{vehicles.max_atmosphering_speed}}</div>
                      <div>Crew: {{vehicles.crew}}</div>
                      <div>Vehicle Class: {{vehicles.vehicle_class}}</div>
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
import {Mixins} from '../assets/Mixins.js';
export default {
  mixins: [Mixins],
    created () {
        console.log(people);
    },
    mounted() {
    axios.get("https://swapi.co/api/vehicles")
    .then(response => {this.info = response.data})
  }
}
</script>

<style>

</style>

<template>
    <div>
        <!--<div>
            <ul>
                <li v-for="people in allPeople" :key="people.name">
                    {{people.name}}
                </li>
            </ul>
        </div>-->

        <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>


        <v-list three-line>
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
              :key="index"
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
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
import {people} from '../assets/people';
export default {
    data () {
        return {
            allPeople: people
        }
    },
    created () {
        console.log(people);
    }
}
</script>

<style>

</style>

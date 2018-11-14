<template>
    <div>
      <v-btn @click="getCourses()">Click Me</v-btn>
      <div v-for="course in courses">
        <div>{{courses.description}}</div>
        <div>{{courses.lectureCredits}}</div>
      </div>
      <div>{{courses.descritpion}}</div>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="planets in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray2" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray3" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray4" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray5" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray6" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="planets in SWArray7" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{planets.name}}</h3>
                    <hr>
                    <v-list-group class="animated fadeInDown">
                      <div class="animated fadeInDown">
                        <div>Rotation Period: {{planets.rotation_period}}</div>
                        <span>Orbital Period: {{planets.orbital_period}}</span>
                        <div>Diameter: {{planets.diameter}}</div>
                        <div>Climate: {{planets.climate}}</div>
                        <div>Gravity: {{planets.gravity}}</div>
                        <div>Terrain: {{planets.terrain}}</div>
                        <div>Surface Water: {{planets.surface_water}}</div>
                        <div>Population: {{planets.population}}</div>
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
import {Mixins} from '../assets/Mixins.js';
import axios from 'axios';
export default {
  data () {
    return {
      SWArray: [],
      SWArray2: [],
      SWArray3: [],
      SWArray4: [],
      SWArray5: [],
      SWArray6: [],
      SWArray7: [],
      courses: []
    }
  },
  mixins: [Mixins],
    created () {
        console.log(planets);
    },
    mounted () {
      axios.get("planets/?page=1")
        .then(response => (this.SWArray = response.data.results)),
        axios.get("planets/?page=2")
        .then(response => (this.SWArray2 = response.data.results)),
        axios.get("planets/?page=3")
        .then(response => (this.SWArray3 = response.data.results)),
        axios.get("planets/?page=4")
        .then(response => (this.SWArray4 = response.data.results)),
        axios.get("planets/?page=5")
        .then(response => (this.SWArray5 = response.data.results)),
        axios.get("planets/?page=6")
        .then(response => (this.SWArray6 = response.data.results)),
        axios.get("planets/?page=7")
        .then(response => (this.SWArray7 = response.data.results))
  },
  methods: {
    getCourses () {
      axios.get('https://sweltering-fire-2420.firebaseio.com/courses.json')
      .then(response => {
        console.log(response)
        const allCoursesObj = response.data
        const objectsToArray = Object.entries(allCoursesObj).map(e => Object.assign(e[1], {key: e[0]}))
        console.log(objectsToArray)
        this.courses = [...objectsToArray]
      })
      .catch(error => console.log(error))
      console.log('Done getting all the data!')
    }
  }
}
</script>

<style>

</style>

<template>
    <div>
      <h1 id="heading" style="text-align: center;" class="animated fadeInDown">Planets</h1>
      <br>
      <br>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
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
                        <v-list-tile>Rotation Period: {{planets.rotation_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Orbital Period: {{planets.orbital_period}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Diameter: {{planets.diameter}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Climate: {{planets.climate}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gravity: {{planets.gravity}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Terrain: {{planets.terrain}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Surface Water: {{planets.surface_water}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Population: {{planets.population}}</v-list-tile>
                        <v-divider></v-divider>
                      </div>
                    </v-list-group>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!--<v-btn @click="getCourses()">Click Me</v-btn>
      <div v-for="course in courses">
        <div>{{courses.description}}</div>
        <div>{{courses.lectureCredits}}</div>
      </div>
      <div>{{courses.descritpion}}</div>-->
    </div>
</template>

<script>
import {Mixins} from '../assets/Mixins.js';
import axios from 'axios';
import {axiosMixin2} from '../assets/AxiosMixin2.js';
export default {
  data () {
    return {
      courses: []
    }
  },
  mixins: [Mixins, axiosMixin2],
    created () {
        console.log(planets);
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

<style scoped>
   #heading {
    font-size: 4em;
  }
</style>

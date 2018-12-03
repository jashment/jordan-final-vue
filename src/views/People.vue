<template>
    <div>
      <h1 id="heading" style="text-align: center;" class="animated fadeInDown">People</h1>
      <br>
      <br>
        <v-container grid-list-xl>
          <v-layout row wrap>

            <v-flex v-for="people in SWArray" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray2" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray3" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray4" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div> 
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray5" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                    
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                    
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray6" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray7" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>

                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                    
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray8" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex v-for="people in SWArray9" :key="`1${i}`" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{people.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Height: {{people.height}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Mass: {{people.mass}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Birth Year: {{people.birth_year}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Hair Color: {{people.hair_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Skin Color: {{people.skin_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Eye Color: {{people.eye_color}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Gender: {{people.gender}}</v-list-tile>
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
import axios from 'axios'
import {Mixins} from '../assets/Mixins.js';
import {axiosMixin} from '../assets/AxiosMixin.js';
export default {
    mixins: [Mixins, axiosMixin],
    created () {
        console.log(people);
    }
}
</script>

<style scoped>
  .shadowed {
    box-shadow: 10px 10px 10px grey;
  }

  #heading {
    font-size: 4em;
  }
</style>

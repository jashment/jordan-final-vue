import {people} from './people';
import {planets} from './planets';
import {starships} from './starships';
import {vehicles} from './vehicles';
import {species} from './species';
export const Mixins = {
        data () {
            return {
                allPeople: people,
                allPlanets: planets,
                allStarships: starships,
                allVehicles: vehicles,
                allSpecies: species,
                info: null
            }
        },
        created () {
            console.log(people);
        },
        mounted() {
        axios.get("https://swapi.co/api/planets")
        .then(response => {this.info = response.data})
      }
}
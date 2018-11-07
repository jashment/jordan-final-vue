import {people} from '../assets/people';
import {planets} from '../assets/planets';
import {starships} from '../assets/starships';
import {vehicles} from '../assets/vehicles';
import {species} from '../assets/species';
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
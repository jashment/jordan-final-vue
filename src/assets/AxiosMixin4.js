import axios from 'axios';

export const axiosMixin4 = {
    data () {
        return {
            SWArray: [],
            SWArray2: [],
            SWArray3: [],
            SWArray4: []
        }
      },
    mounted() {
        axios.get("starships/?page=1")
        .then(response => {this.SWArray = response.data.results}),
        axios.get("starships/?page=2")
        .then(response => {this.SWArray2 = response.data.results}),
        axios.get("starships/?page=3")
        .then(response => {this.SWArray3 = response.data.results}),
        axios.get("starships/?page=4")
        .then(response => {this.SWArray4 = response.data.results})
      }
}
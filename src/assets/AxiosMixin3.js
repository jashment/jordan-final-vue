import axios from 'axios';

export const axiosMixin3 = {
    data () {
        return {
            SWArray: [],
            SWArray2: [],
            SWArray3: [],
            SWArray4: []
        }
      },
    mounted() {
        axios.get("species/?page=1")
        .then(response => {this.SWArray = response.data.results}),
        axios.get("species/?page=2")
        .then(response => {this.SWArray2 = response.data.results}),
        axios.get("species/?page=3")
        .then(response => {this.SWArray3 = response.data.results}),
        axios.get("species/?page=4")
        .then(response => {this.SWArray4 = response.data.results})
      }
}
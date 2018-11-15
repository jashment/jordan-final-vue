import axios from 'axios';

export const axiosMixin5 = {
    data () {
        return {
            SWArray: [],
            SWArray2: [],
            SWArray3: [],
            SWArray4: []
        }
      },
    mounted() {
        axios.get("/vehicles/?page=1")
        .then(response => {this.SWArray = response.data.results}),
        axios.get("/vehicles/?page=2")
        .then(response => {this.SWArray2 = response.data.results}),
        axios.get("/vehicles/?page=3")
        .then(response => {this.SWArray3 = response.data.results}),
        axios.get("/vehicles/?page=4")
        .then(response => {this.SWArray4 = response.data.results})
      }
}
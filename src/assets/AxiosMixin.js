import axios from 'axios';

export const axiosMixin = {
    data () {
        return {
            SWArray: [],
            SWArray2: [],
            SWArray3: [],
            SWArray4: [],
            SWArray5: [],
            SWArray6: [],
            SWArray7: [],
            SWArray8: [],
            SWArray9: []
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
        .then(response => {this.SWArray4 = response.data.results}),
        axios.get("starships/?page=1")
        .then(response => {this.SWArray = response.data.results}),
        axios.get("starships/?page=2")
        .then(response => {this.SWArray2 = response.data.results}),
        axios.get("starships/?page=3")
        .then(response => {this.SWArray3 = response.data.results}),
        axios.get("starships/?page=4")
        .then(response => {this.SWArray4 = response.data.results}),
        axios.get("species/?page=1")
        .then(response => {this.SWArray = response.data.results}),
        axios.get("species/?page=2")
        .then(response => {this.SWArray2 = response.data.results}),
        axios.get("species/?page=3")
        .then(response => {this.SWArray3 = response.data.results}),
        axios.get("species/?page=4")
        .then(response => {this.SWArray4 = response.data.results}),
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
      }
}
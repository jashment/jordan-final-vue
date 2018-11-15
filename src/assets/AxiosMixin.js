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
        axios.get("people/?page=1")
        .then(response => (this.SWArray = response.data.results)),
        axios.get("people/?page=2")
        .then(response => (this.SWArray2 = response.data.results)),
        axios.get("people/?page=3")
        .then(response => (this.SWArray3 = response.data.results)),
        axios.get("people/?page=4")
        .then(response => (this.SWArray4 = response.data.results)),
        axios.get("people/?page=5")
        .then(response => (this.SWArray5 = response.data.results)),
        axios.get("people/?page=6")
        .then(response => (this.SWArray6 = response.data.results)),
        axios.get("people/?page=7")
        .then(response => (this.SWArray7 = response.data.results)),
        axios.get("people/?page=8")
        .then(response => (this.SWArray8 = response.data.results)),
        axios.get("people/?page=9")
        .then(response => (this.SWArray9 = response.data.results))
      }
}
<template>
    <v-container>
        <h1>Remote DB access Example</h1>
        <v-btn>Get Star Wars</v-btn>
        <div v-for="info in SWArray">
            {{info.name}}
            {{info.rotation_period}}
        </div>
        <div>{{SWArray}}</div>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      SWArray: null
    };
  },
  mounted () {
      axios
        .get("https://swapi.co/api/planets/")
        .then(response => (this.SWArray = response.data.results))
  }
}

/*.then(function(response) {
            console.log(response)
            console.log(response.data)
            console.log(response.data.results)
          //this.SWArray.push(response.data.results);
        }).catch(function(error) {
          console.log(error);
        })*/
</script>

<style>
</style>

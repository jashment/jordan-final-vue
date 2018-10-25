import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import People from "./views/People.vue";
import Planets from "./views/Planets.vue";
import Species from "./views/Species.vue";
import Vehicles from "./views/Vehicles.vue";
import Starships from "./views/Starships.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/people",
      name: "people",
      component: People
    },
    {
      path: "/planets",
      name: "planets",
      component: Planets
    },
    {
      path: "/species",
      name: "species",
      component: Species
    },
    {
      path: "/vehicles",
      name: "vehcles",
      component: Vehicles
    },
    {
      path: "/starships",
      name: "starships",
      component: Starships
    }
  ]
});

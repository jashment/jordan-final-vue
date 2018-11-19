import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import People from "./views/People.vue";
import Planets from "./views/Planets.vue";
import Species from "./views/Species.vue";
import Vehicles from "./views/Vehicles.vue";
import Starships from "./views/Starships.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import store from './store'

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
      component: People,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/planets",
      name: "planets",
      component: Planets,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/species",
      name: "species",
      component: Species,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/vehicles",
      name: "vehcles",
      component: Vehicles,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/starships",
      name: "starships",
      component: Starships,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});

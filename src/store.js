import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    signup ({commit, dispatch}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA9mrnhThk-Ptq-BXKiqdqr9ahWIsjtiWE', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
          .then(response => {
            console.log(response)
            commit ('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
            })
            dispatch('storeUser', authData)
          })
          .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA9mrnhThk-Ptq-BXKiqdqr9ahWIsjtiWE', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
          .then(response => {
            console.log(response)
            commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
            })
          })
          .catch(error => console.log(error))
    },
    storeUser ({commit, state}, userData){
      if(!state.idToken) {
        return
      }
      axios.post('https://vuejs-project-58f6b.firebaseio.com/users.json' + '?auth=' + state.idToken, userData)
      .then(response => console.log(response))
      .catch(error =>console.log(error))
    },
    fetchUser ({commit, state}) {
      if(!state.idToken) {
        return
      }
      axios.get('https://vuejs-project-58f6b.firebaseio.com/users.json' + '?auth=' + state.idToken)
    .then(response => {
      console.log(response)
      const data = response.data
      const users = []
      for (let key in data) {
        const user = data[key]
        user.id = key
        users.push(user)
      }
      console.log(users)
      commit('storeUser', users[0])
      })
    .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    authenticatedUser(state) {
      return state.idToken !== null
    }
  }
})

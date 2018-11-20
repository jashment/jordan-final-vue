import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import router from './router'

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
    },
    clearAuthenticatedData (state) {
      state.idToken = null,
      state.userId = null
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
            const now = new Date ()
            const expDate = new Date (now.getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
            localStorage.setItem('expDate', expDate)
            dispatch('storeUser', authData)
            dispatch('setLogoutTimer', response.data.expiresIn)
          })
          .catch(error => console.log(error))
    },
    login ({commit, dispatch}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA9mrnhThk-Ptq-BXKiqdqr9ahWIsjtiWE', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
          .then(response => {
            console.log(response)
            const now = new Date ()
            const expDate = new Date (now.getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)
            localStorage.setItem('expDate', expDate)
            commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
            })
            dispatch('setLogoutTimer', response.data.expiresIn)
          })
          .catch(error => console.log(error))
    },
    autoLogin({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expDate = localStorage.getItem('expDate')
      const now = new Date()
      if (now >= expDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
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
    },
    logout ({commit}) {
      commit('clearAuthenticatedData')
      localStorage.removeItem('expDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/login')
    },
    setLogoutTimer ({commit}, expTime) {
      setTimeout (() => {
        commit('clearAuthenticatedData')
      }, expTime * 1000)
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

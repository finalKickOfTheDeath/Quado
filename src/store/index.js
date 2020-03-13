import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

export default new Vuex.Store({
  state: {
    lists: {}
  },

  mutations: {
    addNewList(state, list) {
      state.lists = { ...state.lists, [list.id]: { title: list.title } }
    }
  },

  actions: {
    async addNewBoard() {
      try {
        let response = await http.post('/boards')
        return response.data.id
      } catch (error) {
        console.log(error)
      }
    },

    async addNewList({ commit }, payload) {
      console.log('on passe ici')
      console.log(payload.title)
      try {
        const response = await http.post(`/boards/${payload.idBoard}/lists`, {
          title: payload.title
        })
        commit('addNewList', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})

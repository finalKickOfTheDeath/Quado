import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

export default new Vuex.Store({
  state: {
    lists: []
  },

  mutations: {
		addList(state, list) {
			state.lists.push(list)
		},

    setList(state, lists) {
			state.lists = lists
    }
  },

  actions: {
    async addBoard() {
      try {
        let response = await http.post('/boards')
        return response.data.id
      } catch (error) {
        console.log(error)
      }
    },

    async addList({ commit }, payload) {
      try {
        const response = await http.post(`/boards/${payload.idBoard}/lists`, {
          title: payload.title
        })
        commit('addList', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchLists({ commit }, payload) {
      try {
        const response = await http.get(`/boards/${payload.idBoard}/lists`)
        commit('setList', response.data.lists)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3333'
})

export default new Vuex.Store({
  state: {
    boards: {}
  },

  mutations: {
    addNewBoard(state, id) {
      state.boards = { ...state.boards, id }
      console.log(state.boards.id)
    },

    addNewList(state, id) {
      state.board.push(id)
      console.log(state.board)
    }
  },

  actions: {
    async addNewBoard({ commit }) {
      try {
        const response = await http.post('/boards')
        commit('addNewBoard', response.data.id)
      } catch (error) {
        console.log(error)
      }
    },

    async addNewList({ commit }, title) {
      try {
        const response = await http.post('/lists', {
          idBoard: '0',
          title: title
        })
        commit('addNewList', response.data.id)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})

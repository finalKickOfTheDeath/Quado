import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: false
  },
  mutations: {
    addNewList(state) {
      state.board = true
      console.debug(state.board)
    }
  },
  actions: {
    addNewList({ commit }, title) {
      console.debug(title)
      commit('addNewList')
    }
  },
  modules: {}
})

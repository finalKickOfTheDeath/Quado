import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getListState, getQuadoState } from './utils'

Vue.use(Vuex)

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

export default new Vuex.Store({
  state: {
    lists: []
  },

  mutations: {
		addList (state, listResult) {
			const list = getListState(listResult)

			if (!state.lists) {
				state.lists = [list]
			} else {
				state.lists.push(list)
			}
		},

		addQuado (state, quadoResult) {
			const quado = getQuadoState(quadoResult)

			for (let list of state.lists) {
				if (list.id === quadoResult.listId) {
					list.quados.push(quado)
				}
			}
		},

    setList (state, listsResult) {
			for (const listResult of listsResult) {
				state.lists.push(getListState(listResult))
			}
    }
  },

  actions: {
    async addBoard () {
      try {
        let response = await http.post('/boards')
        return response.data.id
      } catch (error) {
        console.log(error)
      }
    },

    async addList ({ commit }, payload) {
      try {
        const response = await http.post(`/boards/${payload.boardId}/lists`, {
          title: payload.title
        })
				//TODO: check that list boardId is the same as payload one
        commit('addList', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async addQuado ({ commit }, payload) {
      try {
        const response = await http.post(`/lists/${payload.listId}/quados`, {
          title: payload.title,
					description: payload.description
					// TODO: add this
					// deadline: payload.deadline,
					// repeat: payload.repeat
        })
				//TODO: check that quado listId is the same as payload one
        commit('addQuado', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchLists ({ commit }, payload) {
      try {
        const response = await http.get(`/boards/${payload.boardId}/lists`)
				//TODO: check that each list boardId is the same as payload one
        commit('setList', response.data.lists)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})

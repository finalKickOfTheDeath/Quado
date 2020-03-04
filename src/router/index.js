import Vue from 'vue'
import VueRouter from 'vue-router'
import NewBoard from '../components/NewBoard.vue'
import NewList from '../components/NewList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: NewBoard },
  { path: '/boards/:idBoard', component: NewList }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

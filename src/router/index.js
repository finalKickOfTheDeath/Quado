import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Board from '../components/Board.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/boards/:idBoard', component: Board }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

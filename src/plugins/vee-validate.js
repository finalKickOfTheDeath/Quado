import Vue from 'vue'
import { max } from 'vee-validate/dist/rules'
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
  extend
} from 'vee-validate'

setInteractionMode('eager')

extend('max', {
  ...max,
  message: 'Le {_field_} ne peut pas dépasser {length} caractères'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

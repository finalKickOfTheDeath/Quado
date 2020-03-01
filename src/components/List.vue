<template>
  <div class="paper">
    <NewQuado></NewQuado>
  </div>
</template>

<script>
import NewQuado from './NewQuado.vue'

export default {
  name: 'List',

  components: {
    NewQuado
  },

  data: () => ({
    id: '',
    idBoard: '',
    title: '',

    quadosList: {}
  }),

  methods: {}
}
</script>

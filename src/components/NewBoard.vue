<template>
  <div class="paper container">
    <h1>Ready to organize ?</h1>
    <button class="btn-large" @click="addNewBoard()">Oh que oui !</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewBoard',

  components: {},

  data: () => ({}),

  methods: {
    ...mapActions({
      addNewBoard: 'addNewBoard'
    })
  }
}
</script>

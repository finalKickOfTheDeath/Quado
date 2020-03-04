<template>
  <div class="paper container">
    <h1>Ready to organize ?</h1>
    <button class="btn-large" @click="addNewBoard()">Oh que oui !</button>
  </div>
</template>

<script>
export default {
  name: 'NewBoard',

  components: {},

  data: () => ({}),

  computed: {
    idBoard() {
      return this.$store.state.idBoard
    }
  },

  methods: {
    async addNewBoard() {
      await this.$store.dispatch('addNewBoard')
      this.$router.push({ path: `/boards/${this.idBoard}` })
    }
  }
}
</script>

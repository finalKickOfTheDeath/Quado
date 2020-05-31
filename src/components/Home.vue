<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" class="text-center text-sm-right">
        <h1 class="display-3 pb-3 font-weight-bold">Quado</h1>
      </v-col>
      <v-col cols="12" sm="6" class="text-center text-sm-left">
        <v-btn x-large @click="addBoard()">
          <v-icon size="30">fas fa-otter</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  components: {},

  data: () => ({}),

  methods: {
    async addBoard() {
      const boardId = await this.$store.dispatch('addBoard')
      this.$router.push({ path: `/boards/${boardId}` })
    }
  }
}
</script>

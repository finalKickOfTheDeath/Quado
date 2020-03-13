<template>
  <v-row no-gutters>
    <v-col cols="auto" class="pa-1 mr-3">
      <v-btn icon @click="switchNewList">
        <v-icon>{{ switchIcon }}</v-icon>
      </v-btn>
    </v-col>

    <v-col v-if="clicked" cols="auto">
      <v-form @submit.prevent="addNewList">
        <v-container class="ma-0 pa-0">
          <v-row no-gutters>
            <v-col cols="12" sm="10">
              <v-text-field
                solo
                dense
                hide-details
                label="Titre de la liste..."
                v-model="title"
              >
              </v-text-field>
            </v-col>
            <v-col class="pa-1">
              <v-btn icon type="submit">
                <v-icon>far fa-check-square</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'NewList',

  components: {},

  data: () => ({
    clicked: false,
    switchIcon: 'far fa-plus-square',
    title: ''
  }),

  methods: {
    switchNewList() {
      this.clicked = !this.clicked
      if (this.clicked) {
        this.switchIcon = 'far fa-minus-square'
      } else {
        this.switchIcon = 'far fa-plus-square'
      }
    },

    async addNewList() {
      console.log(this.$route.params)
      await this.$store.dispatch('addNewList', {
        idBoard: this.$route.params.idBoard,
        title: this.title
      })
      this.title = ''
      this.switchNewList()
    }
  }
}
</script>

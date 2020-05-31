<template>
	<div class="text-center">
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
				<v-btn small outlined v-on="on">L</v-btn>
      </template>

      <v-card>
        <v-card-title>
					Ajouter une liste
        </v-card-title>

        <v-card-text>
					<v-text-field v-model="title" label="Titre" outlined dense></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
					<v-btn color="primary" outlined small @click="dialog = false">
						Hum non
          </v-btn>
					<v-btn color="primary" outlined small @click="addList">
						OK !
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ListModal',

  components: {},

  data: () => ({
    dialog: false,
    title: ''
  }),

  methods: {
    async addList() {
      await this.$store.dispatch('addList', {
        boardId: this.$route.params.boardId,
        title: this.title
      })
      this.title = ''
			this.dialog = false
    }
  }
}
</script>

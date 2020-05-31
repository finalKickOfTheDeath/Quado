<template>
<div class="text-center">
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
				<v-btn small outlined v-on="on">Q</v-btn>
      </template>

      <v-card>
        <v-card-title>
					Ajouter un quado
        </v-card-title>

        <v-card-text>
				<v-col>
					<v-text-field v-model="title" label="Titre" outlined dense></v-text-field>
					<v-text-field v-model="description" label="Description" outlined dense></v-text-field>
					<v-autocomplete v-model="list" :items="lists" item-text="title" item-value="id" outlined dense label="Liste"></v-autocomplete>

					<v-checkbox class="pt-0 mt-0" v-model="deadlineCheckbox" :label="`Date limite`" dense></v-checkbox>
					<v-menu v-if="deadlineCheckbox" ref="deadlinePicker" v-model="deadlinePicker" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-model="dateFormatted" label="Date" @blur="date = parseDate(dateFormatted)" v-on="on" outlined dense>
							</v-text-field>
						</template>
						<v-date-picker v-model="date" no-title @input="deadlinePicker = false"></v-date-picker>
					</v-menu>
					Date: {{ date }}
					Date: {{ dateFormatted }}

					<v-checkbox class="pt-0 mt-0" v-model="repeatCheckbox" :label="`Répéter`" dense></v-checkbox>
					<v-radio-group class="pt-0 mt-0" v-if="repeatCheckbox" v-model="repeatRadioGroup" dense>
						<v-radio :label="`Tous les jours`" :value="0"></v-radio>
						<v-radio :label="`Toutes les semaines`" :value="1"></v-radio>
						<v-row no-gutters justify="center">
							<v-btn-toggle v-if="repeatRadioGroup == 1" v-model="repeatDays" multiple>
								<v-btn v-for="day in weekDays" :key="day" small>{{ day }}</v-btn>
							</v-btn-toggle>
						</v-row>
						Model: {{ days }}
					</v-radio-group>

        </v-col>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
					<v-btn color="primary" outlined small @click="dialog = false">
						Pas tout de suite
          </v-btn>
					<v-btn color="primary" outlined small @click="addQuado">
						Ok !
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  name: 'QuadoModal',

  components: {},

  data: (vm) => ({
		dialog: false,
		title: '',
		description: '',
		list: '',
		deadlineCheckbox: true,
    deadlinePicker: false,
		date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
		repeatCheckbox: false,
		repeatRadioGroup: 0,
		repeatDays: [],
		weekDays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
	}),

	computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
		lists () {
			if (!this.$store.state.lists) {
				return []
			}
			return this.$store.state.lists
		},
		days () {
			if (this.repeatRadioGroup === 0) {
				return [...Array(7).keys()]
			}
			// TODO: sort ?
			return this.repeatDays
		}
  },

	watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
		formatDate (date) {
			if (!date) return null

			const [year, month, day] = date.split('-')
			return `${day}/${month}/${year}`
		},

		parseDate (date) {
			if (!date) return null

			const [month, day, year] = date.split('/')
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
		},

    async addQuado() {
			console.log("sending")
      await this.$store.dispatch('addQuado', {
        listId: this.list,
        title: this.title,
				description: this.description,
				// deadline: this.dateFormatted,
				// repeat: this.days
      })
      this.title = ''
			this.description = ''
			this.list = ''
			// TODO: reset other fields
			this.dialog = false
    }
	}
}
</script>

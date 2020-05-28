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
					<v-text-field label="Titre" outlined dense></v-text-field>
					<v-text-field label="Description" outlined dense></v-text-field>
					<v-autocomplete v-model="list" :items="lists" item-text="title" item-value="id" outlined dense label="Liste"></v-autocomplete>
					{{ list }}

					<v-checkbox v-model="checkboxDeadline" :label="`Fixer une date limite`" dense></v-checkbox>
					<v-menu v-if="checkboxDeadline" ref="deadlinePicker" v-model="deadlinePicker" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
						<template v-slot:activator="{ on }">
							<v-text-field v-model="dateFormatted" label="Date" hint="DD/MM/YYYY format" persistent-hint @blur="date = parseDate(dateFormatted)" v-on="on" outlined dense>
							</v-text-field>
						</template>
						<v-date-picker v-model="date" no-title @input="deadlinePicker = false"></v-date-picker>
					</v-menu>
					<p>Date in ISO format: <strong>{{ date }}</strong></p>

					<v-checkbox v-model="checkboxRecurring" :label="`Récurrence`" dense></v-checkbox>
					<v-radio-group v-if="checkboxRecurring" v-model="radioGroup" dense>
						<v-radio :label="`Tous les jours`" :value="0"></v-radio>
						<v-radio :label="`Toutes les semaines`" :value="1"></v-radio>
							<v-btn-toggle v-model="toggle_exclusive" multiple>
								<v-btn v-for="day in days" :key="day" small>{{ day }}</v-btn>
							</v-btn-toggle>

							<v-col cols="12" class="text-center">
								Model: {{ toggle_exclusive }}
							</v-col>
					</v-radio-group>

        </v-col>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
					<v-btn color="primary" outlined small @click="dialog = false">
						Pas tout de suite
          </v-btn>
					<v-btn color="primary" outlined small @click="dialog = false">
						Ok !
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'QuadoModal',

  components: {},

  data: (vm) => ({
		dialog: false,
		list: '',
		checkboxDeadline: true,
		date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    deadlinePicker: false,
		checkboxRecurring: false,
		days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
		toggle_exclusive: []
	}),

	computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
		...mapState({
			lists: state => state.lists
		}),
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
	}
}
</script>

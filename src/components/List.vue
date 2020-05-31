<template>
  <v-col cols="12" sm="6">
    <v-card outlined>
			<v-list shaped>
				<v-subheader>{{ list.title }}</v-subheader>
					<v-list-item-group v-model="dones" color="primary" multiple>
						<quado v-for="quado in list.quados" :key="quado.id" :quado="quado"></quado>
					</v-list-item-group>
			</v-list>
			{{ dones }}
    </v-card>
  </v-col>
</template>

<script>
import Quado from '../components/Quado.vue'

export default {
  name: 'List',

  components: {
		Quado
	},

  props: ['list'],

  data: () => ({
		dones: []
	}),

  methods: {}
}
</script>

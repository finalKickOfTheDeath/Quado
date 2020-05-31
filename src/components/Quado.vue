<template>
	<v-list-item>
		<template v-slot:default="{ active }">
			<v-list-item-content>
				<v-list-item-title v-text="quado.title"></v-list-item-title>
				<v-list-item-subtitle v-text="quado.description"></v-list-item-subtitle>
			</v-list-item-content>

			<v-list-item-action>
				<v-list-item-action-text v-text="quado.deadline"></v-list-item-action-text>
				<v-checkbox :input-value="active"></v-checkbox>
			</v-list-item-action>
		</template>
	</v-list-item>
</template>

<script>
export default {
  name: 'Quado',

  components: {},

  props: ['quado'],

  data: () => ({

	}),

  methods: {}
}
</script>

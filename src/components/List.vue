<template>
  <v-col cols="12" sm="6">
    <v-card outlined>
      <v-card-title class="headline">{{ list.title }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'List',

  components: {},

  props: ['list'],

  data: () => ({
    id: '',
    idBoard: '',
    title: '',

    quadosList: {}
  }),

  methods: {}
}
</script>

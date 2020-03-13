<template>
  <v-container fluid>
    <v-row>
      <List v-for="(list, id) in lists" :key="id" :list="list"></List>
    </v-row>
    <v-footer absolute>
      <NewList></NewList>
    </v-footer>
  </v-container>
</template>

<script>
import List from '../components/List.vue'
import NewList from '../components/NewList.vue'
import { mapState } from 'vuex'

export default {
  name: 'Board',

  components: {
    List,
    NewList
  },

  data: () => ({}),

  computed: mapState({
    lists: state => state.lists
  }),

  methods: {}
}
</script>

<style type="text/css" lang="sass" media="screen"></style>

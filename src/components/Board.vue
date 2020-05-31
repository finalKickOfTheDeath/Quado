<template>
  <v-container fluid>
    <v-row>
      <List v-for="(list, id) in lists" :key="id" :list="list"></List>
    </v-row>
    <v-footer absolute>
			<list-modal class="mr-4"></list-modal>
			<quado-modal></quado-modal>
    </v-footer>
  </v-container>
</template>

<script>
import List from '../components/List.vue'
import ListModal from '../components/ListModal.vue'
import QuadoModal from '../components/QuadoModal.vue'
import { mapState } from 'vuex'

export default {
  name: 'Board',

  components: {
    List,
		ListModal,
		QuadoModal
  },

  data: () => ({}),

  created() {
    this.fetchLists()
  },

  watch: {
    '$route': 'fetchLists'
  },

  computed: mapState({
    lists: state => state.lists
  }),

  methods: {
    async fetchLists() {
      await this.$store.dispatch('fetchLists', {
        boardId: this.$route.params.boardId
      })
    }
  }
}
</script>

<template>
  <button v-if="!clicked" @click="openForm">New list</button>
  <div v-else>
    <form @submit.prevent="onSubmit(title)">
      <div class="form-group">
        <label for="listTitle">Titre</label>
        <input type="text" placeholder="Liste" id="listTitle" v-model="title" />
        <button type="submit">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NewList',

  components: {},

  data: () => ({
    clicked: false,
    title: ''
  }),

  methods: {
    ...mapActions({
      onSubmit: 'addNewList'
    }),

    openForm() {
      this.clicked = !this.clicked
    }
  }
}
</script>

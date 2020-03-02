<template>
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Quado</title>
    </head>
    <body>
      <NewBoard></NewBoard>
    </body>
  </html>
</template>

<script>
import NewBoard from './components/NewBoard.vue'

export default {
  name: 'App',

  components: {
    NewBoard
  },

  data: () => ({}),

  methods: {}
}
</script>

<style lang="scss">
@import '../node_modules/papercss/dist/paper.css';
</style>

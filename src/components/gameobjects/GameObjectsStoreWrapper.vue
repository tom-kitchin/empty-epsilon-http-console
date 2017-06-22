<template>
  <game-objects :gameObjects="gameObjects" />
</template>

<script>
import GameObjects from '@/components/gameobjects/GameObjects'

export default {
  name: 'game-objects-store-wrapper',
  computed: {
    gameObjects () {
      return {
        '': {
          id: '',
          name: 'First Player Ship'
        },
        ...this.$store.getters.gameObjects
      }
    }
  },
  components: {
    GameObjects
  }
}
</script>

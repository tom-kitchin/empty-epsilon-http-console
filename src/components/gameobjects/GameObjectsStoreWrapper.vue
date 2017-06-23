<template>
  <game-objects
    :gameObjects="gameObjects"
    @addGameObject="addGameObject"
    @deleteGameObject="deleteGameObject"
  />
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
  methods: {
    addGameObject (gameObject) {
      this.$store.dispatch('addGameObject', gameObject)
    },
    deleteGameObject (gameObjectId) {
      this.$store.dispatch('deleteGameObject', gameObjectId)
    }
  },
  components: {
    GameObjects
  }
}
</script>

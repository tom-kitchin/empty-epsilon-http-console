<template>
  <div>
    <game-object
      v-for="gameObject in gameObjects"
      key="gameObject.id"
      :gameObject="gameObject"
      class="game-object"
    />
    <add-game-object
      @addGameObject="addGameObject"
      class="game-object"
    />
  </div>
</template>

<script>
import GameObject from '@/components/gameobjects/GameObject'
import AddGameObject from '@/components/gameobjects/AddGameObject'

export default {
  name: 'game-objects',
  props: {
    gameObjects: {
      required: true,
      type: Object
    }
  },
  methods: {
    addGameObject (gameObject) {
      this.$emit('addGameObject', gameObject)
    }
  },
  components: {
    GameObject,
    AddGameObject
  }
}
</script>

<style>
.game-object {
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px grey;
  padding: 5px;
  margin-bottom: 10px;
}
</style>

<template>
  <div>
    <game-object
      v-for="gameObject in gameObjects"
      key="gameObject.id"
      class="game-object"
      :gameObject="gameObject"
      @deleteGameObject="deleteGameObject"
    />
    <div>
      <add-game-object
        v-if="adding"
        class="game-object"
        @saveGameObject="addGameObject"
        @cancel="adding = false"
      />
      <ui-button
        v-else
        type="primary"
        color="primary"
        icon="add"
        @click="adding = true"
      >new object</ui-button>
    </div>
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
  data () {
    return {
      adding: false
    }
  },
  methods: {
    addGameObject (gameObject) {
      this.$emit('addGameObject', gameObject)
      this.adding = false
    },
    deleteGameObject (gameObjectId) {
      this.$emit('deleteGameObject', gameObjectId)
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

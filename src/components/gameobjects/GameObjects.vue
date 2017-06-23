<template>
  <div>
    <game-object
      v-for="gameObject in gameObjects"
      key="gameObject.id"
      class="gameobject"
      :gameObject="gameObject"
      @deleteGameObject="deleteGameObject"
    />
    <div>
      <add-game-object
        v-if="adding"
        class="gameobject"
        @saveGameObject="addGameObject"
        @cancel="adding = false"
      />
      <div v-else class="gameobject-faded">
        <ui-icon-button
          type="primary"
          color="primary"
          size="large"
          icon="add"
          tooltip="Add object"
          @click="adding = true"
        />
      </div>
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
.gameobject {
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px grey;
  padding: 5px;
  margin-bottom: 10px;
}
.gameobject-faded {
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
}
</style>

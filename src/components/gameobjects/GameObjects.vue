<template>
  <div>
    <game-object
      v-for="gameObject in gameObjects"
      key="gameObject.id"
      :gameObject="gameObject"
    />
  </div>
</template>

<script>
import GameObject from '@/components/gameobjects/GameObject'

export default {
  name: 'game-objects',
  props: {
    gameObjects: {
      required: true,
      type: Object
    }
  },
  components: {
    GameObject
  }
}
</script>

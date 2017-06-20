<template>
  <div class="game-object">
    <attributes />
  </div>
</template>

<script>
import Attributes from '@/components/attributes/Attributes'

export default {
  name: 'game-object',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    attributes () {
      return this.$store.getters.attributesForGameObject(this.id)
    }
  },
  components: {
    Attributes
  }
}
</script>

<style>
.game-object {
  border: 2px solid red;
  border-radius: 5px;
}
</style>

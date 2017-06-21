<template>
  <div class="game-object masonry">
    <div class="brick">
      <h3>Game Object</h3>
    </div>
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
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px grey;
  padding: 5px;
}
</style>

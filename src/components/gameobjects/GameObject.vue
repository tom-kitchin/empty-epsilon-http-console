<template>
  <div class="game-object masonry">
    <div class="brick">
      <h3>{{ gameObject.name }}</h3>
    </div>
    <attributes-store-wrapper :forGameObject="gameObject.id" />
  </div>
</template>

<script>
import AttributesStoreWrapper from '@/components/attributes/AttributesStoreWrapper'

export default {
  name: 'game-object',
  props: {
    gameObject: {
      required: true,
      type: Object
    }
  },
  components: {
    AttributesStoreWrapper
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

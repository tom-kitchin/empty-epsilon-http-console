<template>
  <div class="masonry">
    <div class="brick">
      <p ref="title" class="gameobject-title">{{ gameObject.name }}</p>
      <ui-tooltip
        trigger="title"
        position="bottom right"
      >
        Calling '{{ gameObject.method }}' on the server.
      </ui-tooltip>
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
.gameobject-title {
  font-size: large;
  margin: 0.5em;
  border-bottom-style: dashed;
  border-bottom-width: thin;
}
</style>

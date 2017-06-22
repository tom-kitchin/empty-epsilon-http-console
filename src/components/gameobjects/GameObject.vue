<template>
  <div class="masonry">
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

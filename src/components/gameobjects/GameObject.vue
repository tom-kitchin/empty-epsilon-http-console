<template>
  <div class="gameobject-wrapper">
    <div>
      <p ref="title" class="gameobject-title">{{ gameObject.name }}</p>
      <ui-tooltip
        trigger="title"
        position="bottom left"
      >{{ this.titleTooltip }}</ui-tooltip>
    </div>
    <attributes-store-wrapper
      :forGameObject="gameObject.id"
    />
    <div class="gameobject-buttons">
      <ui-icon-button
        v-if="!isDefaultGameObject"
        type="secondary"
        size="medium"
        tooltip="Delete attribute"
        tooltipPosition="bottom right"
        icon="delete"
        :color="deleteColour"
        @click="deleteGameObject"
        @mouseover.native="onHoverDelete = true"
        @mouseleave.native="onHoverDelete = false"
      />
    </div>
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
  data () {
    return {
      onHoverDelete: false
    }
  },
  computed: {
    isDefaultGameObject () {
      return !this.gameObject.method
    },
    titleTooltip () {
      if (this.isDefaultGameObject) {
        return 'The default game object!'
      } else {
        return `Calling '${this.gameObject.method}' on the server`
      }
    },
    deleteColour () {
      if (this.onHoverDelete) { return 'red' }
      return ''
    }
  },
  methods: {
    deleteGameObject () {
      this.$emit('deleteGameObject', this.gameObject.id)
    }
  },
  components: {
    AttributesStoreWrapper
  }
}
</script>

<style>
.gameobject-wrapper {
  position: relative;
}
.gameobject-title {
  display: inline-block;
  font-size: large;
  margin: 0.5em;
  border-bottom-style: dashed;
  border-bottom-width: thin;
}
.gameobject-buttons {
  position: absolute;
  right: 0;
  top: 0;
}
</style>

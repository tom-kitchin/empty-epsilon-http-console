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
      :adding="addingAttribute"
      @stopAdding="addingAttribute = false"
    />
    <div class="gameobject-controls">
      <ui-button
        v-if="!addingAttribute"
        type="primary"
        color="primary"
        size="small"
        icon="add"
        @click="addingAttribute = true"
      >new attribute</ui-button>
      <ui-button
        v-if="!isDefaultGameObject"
        type="primary"
        color="red"
        size="small"
        icon="delete"
        @click="deleteGameObject"
      >delete object</ui-button>
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
      addingAttribute: false
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
  padding-bottom: 2.5em;
}
.gameobject-title {
  display: inline-block;
  font-size: large;
  margin: 0.5em;
  border-bottom-style: dashed;
  border-bottom-width: thin;
}
.gameobject-controls {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px;
}
</style>

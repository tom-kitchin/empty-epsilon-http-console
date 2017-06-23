<template>
  <add-attribute
    v-if="editing"
    :initialName="attribute.name"
    :initialMethod="attribute.method"
    @saveAttribute="updateAttribute"
    @cancel="editing = false"
  />
  <div v-else>
    <ui-tooltip
      trigger="attributeName"
      position="bottom left"
    >
      Calling '{{ attribute.method }}' on the server.
    </ui-tooltip>
    <p ref="attributeName" class="attribute-name">{{ name }}</p>
    <p class="attribute-value">{{ value }}</p>
    <ui-icon-button
      class="attribute-edit-button"
      type="secondary"
      size="small"
      tooltip="Edit attribute"
      icon="edit"
      @click="editing = true"
    />
  </div>
</template>

<script>
import AddAttribute from '@/components/attributes/AddAttribute'

export default {
  props: {
    attribute: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    name () {
      return this.attribute.name
    },
    value () {
      return this.attribute.value
    }
  },
  methods: {
    updateAttribute (attribute) {
      this.$emit('updateAttribute', {
        id: this.attribute.id,
        ...attribute
      })
      this.editing = false
    }
  },
  components: {
    AddAttribute
  }
}
</script>

<style>
.attribute-edit-button {
  position: absolute;
  right: 0;
  top: 0;
}
.attribute-name {
  border-bottom-style: dotted;
  border-bottom-width: thin;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0.5em;
}
.attribute-value {
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0.5em;
}
</style>

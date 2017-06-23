<template>
  <add-attribute
    v-if="editing"
    :initialName="attribute.name"
    :initialMethod="attribute.method"
    @saveAttribute="updateAttribute"
  />
  <div v-else>
    <p>
      {{ name }} : {{ value }}
    </p>
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
</style>

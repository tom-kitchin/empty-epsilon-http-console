<template>
  <div>
    <attribute
      v-for="attribute in attributes"
      key="attribute.id"
      class="brick attribute"
      :attribute="attribute"
      @updateAttribute="updateAttribute"
    />
    <add-attribute
      class="brick attribute"
      @saveAttribute="addAttribute"
    />
  </div>
</template>

<script>
import Attribute from '@/components/attributes/Attribute'
import AddAttribute from '@/components/attributes/AddAttribute'

export default {
  props: {
    attributes: {
      required: false,
      type: Array
    }
  },
  methods: {
    addAttribute (attribute) {
      this.$emit('addAttribute', attribute)
    },
    updateAttribute (attribute) {
      this.$emit('updateAttribute', attribute)
    }
  },
  components: {
    Attribute,
    AddAttribute
  }
}
</script>

<style>
.attribute {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px 0px grey;
  position: relative;
}
</style>

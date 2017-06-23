<template>
  <div class="masonry attributes-wrapper">
    <div
      v-for="attribute in attributes"
      key="attribute.id"
      class="brick"
    >
      <attribute
        class="attribute"
        :attribute="attribute"
        @updateAttribute="updateAttribute"
        @deleteAttribute="deleteAttribute"
      />
    </div>
    <div v-if="adding" class="brick">
      <add-attribute
        v-if="adding"
        class="attribute"
        @saveAttribute="addAttribute"
        @cancel="$emit('stopAdding')"
      />
    </div>
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
    },
    adding: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  methods: {
    addAttribute (attribute) {
      this.$emit('addAttribute', attribute)
    },
    updateAttribute (attribute) {
      this.$emit('updateAttribute', attribute)
    },
    deleteAttribute (attributeId) {
      this.$emit('deleteAttribute', attributeId)
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
  margin-bottom: 2px;
}
</style>

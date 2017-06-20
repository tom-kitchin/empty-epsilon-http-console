<template>
  <div>
    <attribute
      v-for="attribute in attributes"
      key="attribute.id"
      :attribute="attribute"
    />
    <add-attribute />
  </div>
</template>

<script>
import Attribute from '@/components/attributes/Attribute'
import AddAttribute from '@/components/attributes/AddAttribute'

export default {
  computed: {
    attributes () {
      return this.$store.getters.attributes
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
  display: inline-block;
}
</style>

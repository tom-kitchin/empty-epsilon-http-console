<template>
  <div>
    <h2>Attributes</h2>
    <attribute
      v-for="attribute in attributes"
      key="attribute.id"
      :attribute="attribute"
    />
    <add-attribute />
  </div>
</template>

<script>
import Attribute from '@/components/Attribute'
import AddAttribute from '@/components/AddAttribute'

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

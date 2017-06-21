<template>
  <div>
    <attribute
      v-for="attribute in attributes"
      key="attribute.id"
      :attribute="attribute"
      class="brick attribute"
    />
    <add-attribute class="brick" />
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
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px 0px grey;
}
</style>

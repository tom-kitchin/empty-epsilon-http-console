<template>
  <div>
    <div
      v-for="attribute in attributes"
      key="attribute.id"
      class="brick"
    >
      <attribute
        class="attribute"
        :attribute="attribute"
        @updateAttribute="updateAttribute"
      />
    </div>
    <div class="brick">
      <add-attribute
        v-if="adding"
        class="attribute"
        @saveAttribute="addAttribute"
        @cancel="adding = false"
      />
      <ui-button
        v-else
        type="primary"
        color="primary"
        size="small"
        icon="add"
        @click="adding = true"
      >new attribute</ui-button>
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
    }
  },
  data () {
    return {
      adding: false
    }
  },
  methods: {
    addAttribute (attribute) {
      this.$emit('addAttribute', attribute)
      this.adding = false
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
  margin-bottom: 2px;
}
</style>

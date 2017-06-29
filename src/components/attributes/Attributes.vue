<template>
  <div class="masonry-attributes attributes-wrapper">
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
    <div class="brick">
      <add-attribute
        v-if="adding"
        class="attribute"
        @saveAttribute="addAttribute"
        @cancel="adding = false"
      />
      <div v-if="!adding" class="attribute-faded">
        <ui-icon-button
          type="primary"
          color="primary"
          size="large"
          icon="add"
          tooltip="Add attribute"
          @click="adding = true"
        />
      </div>
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
.attribute-faded {
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  position: relative;
  margin-bottom: 2px;
  text-align: center;
}
</style>

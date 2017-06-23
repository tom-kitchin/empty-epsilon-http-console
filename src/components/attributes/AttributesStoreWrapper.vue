<template>
  <attributes
    :attributes="attributes"
    :adding="adding"
    @addAttribute="addAttribute"
    @updateAttribute="updateAttribute"
    @deleteAttribute="deleteAttribute"
    @stopAdding="$emit('stopAdding')"
  />
</template>

<script>
import Attributes from '@/components/attributes/Attributes'

export default {
  name: 'attributes-store-wrapper',
  props: {
    forGameObject: {
      required: false,
      type: String
    },
    adding: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    attributes () {
      if (this.forGameObject) {
        return this.$store.getters.attributesForGameObject(this.forGameObject)
      } else {
        return this.$store.getters.attributesWithoutGameObject
      }
    }
  },
  methods: {
    addAttribute (attribute) {
      if (this.forGameObject) {
        this.$store.dispatch('addAttribute', {
          ...attribute,
          gameObject: this.forGameObject
        })
      } else {
        this.$store.dispatch('addAttribute', attribute)
      }
      this.$emit('stopAdding')
    },
    updateAttribute (attribute) {
      if (this.forGameObject) {
        this.$store.dispatch('updateAttribute', {
          ...attribute,
          gameObject: this.forGameObject
        })
      } else {
        this.$store.dispatch('updateAttribute', attribute)
      }
    },
    deleteAttribute (attributeId) {
      this.$store.dispatch('deleteAttribute', attributeId)
    }
  },
  components: {
    Attributes
  }
}
</script>

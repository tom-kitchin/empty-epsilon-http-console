<template>
  <attributes
    :attributes="attributes"
    @addAttribute="addAttribute"
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
      console.log('hello?')
      if (this.forGameObject) {
        this.$store.dispatch('addAttribute', {
          ...attribute,
          gameObject: this.forGameObject
        })
      } else {
        this.$store.dispatch('addAttribute', attribute)
      }
    }
  },
  components: {
    Attributes
  }
}
</script>

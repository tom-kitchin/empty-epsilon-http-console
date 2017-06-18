<template>
  <div>
    {{ name }} : {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      required: true,
      type: Object
    }
  },
  computed: {
    name () {
      return this.attribute.name
    },
    value () {
      return this.attribute.value
    }
  }
}
</script>

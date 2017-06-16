<template>
  <div>
    {{ name }} : {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    getter: {
      required: true,
      type: Object
    }
  },
  computed: {
    name () {
      return this.getter.name
    },
    value () {
      return this.getter.value
    }
  }
}
</script>

<template>
  <div>
    {{ name }} : {{ value }}
  </div>
</template>

<script>
export default {
  name: 'getter',
  props: {
    name: {
      required: true,
      type: String
    },
    getter: {
      required: true,
      type: Object
    }
  },
  computed: {
    value () {
      return this.getter
    }
  }
}
</script>

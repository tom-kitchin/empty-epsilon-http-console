<template>
  <div>
    {{ name }} : {{ value }}
  </div>
</template>

<script>
export default {
  name: 'state-entry',
  props: {
    name: {
      required: true,
      type: String
    },
    value: {
      required: false
    }
  }
}
</script>

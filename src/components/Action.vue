<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'action',
  props: {
    name: {
      required: true,
      type: String
    },
    action: {
      required: true,
      type: Object
    }
  }
}
</script>

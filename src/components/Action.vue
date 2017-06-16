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
    }
  }
}
</script>

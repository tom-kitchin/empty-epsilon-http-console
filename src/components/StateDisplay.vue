<template>
  <div>
    Hello
    {{ state }}
  </div>
</template>

<script>
export default {
  name: 'state-display',
  props: {
    state: {
      required: true,
      type: Object
    }
  }
}
</script>

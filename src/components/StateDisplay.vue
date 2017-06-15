<template>
  <div>
    Hello everyone
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

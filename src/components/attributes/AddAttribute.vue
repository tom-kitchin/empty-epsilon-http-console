<template>
  <div>
    <input v-model="name" placeholder="Name the status!" />
    <input v-model="method" placeholder="What method should be called?" />
    <a class="button" @click="saveAttribute">+</a>
  </div>
</template>

<script>
export default {
  props: {
    initialName: {
      required: false,
      type: String,
      default: ''
    },
    initialMethod: {
      required: false,
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: this.initialName,
      method: this.initialMethod
    }
  },
  methods: {
    saveAttribute () {
      if (this.name && this.method) {
        this.$emit('saveAttribute', {
          name: this.name,
          method: this.method
        })
        this.name = ''
        this.method = ''
      }
    }
  }
}
</script>

<style>
.button {
  cursor: pointer;
}
</style>

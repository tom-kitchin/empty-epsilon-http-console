<template>
  <div>
    <input v-model="name" placeholder="new getter" />
    <a class="button" @click="addGetter">+</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: undefined
    }
  },
  methods: {
    addGetter () {
      if (this.name) {
        this.$emit('addGetter', this.name)
        this.name = ''
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

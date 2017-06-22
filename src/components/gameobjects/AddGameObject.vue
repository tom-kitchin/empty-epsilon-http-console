<template>
  <div>
    <input v-model="name" placeholder="Name the object!" />
    <input v-model="method" placeholder="What method should be called?" />
    <a class="button" @click="addGameObject">+</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: undefined,
      method: undefined
    }
  },
  methods: {
    addGameObject () {
      if (this.name && this.method) {
        this.$emit('addGameObject', { name: this.name, method: this.method })
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

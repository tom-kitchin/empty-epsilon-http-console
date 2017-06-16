<template>
  <div>
    <input v-model="name" placeholder="Name the status!" />
    <input v-model="method" placeholder="What method should be called?" />
    <a class="button" @click="addGetter">+</a>
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
    addGetter () {
      if (this.name && this.method) {
        this.$store.dispatch('addGetter', {
          name: this.name, method: this.method
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

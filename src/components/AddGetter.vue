<template>
  <div>
    <input v-model="name" placeholder="new getter" />
    <a @click="addGetter">+</a>
  </div>
</template>

<script>
export default {
  name: 'add-getter',
  data () {
    return {
      name: undefined
    }
  },
  methods: {
    addGetter () {
      if (this.name) {
        this.$emit('addGetter', this.name)
      }
    }
  }
}
</script>

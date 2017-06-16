<template>
  <div v-if="editing">
    <input
      placeholder="localhost:8080"
      v-model="serverAddress"
    />
    <a class="button" @click="saveServerAddress">+</a>
  </div>
  <div v-else>
    <p>{{ serverAddress }}</p>
    <a class="button" @click="editing = true">+</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editing: !!this.serverAddress,
      tempServerAddress: this.serverAddress
    }
  },
  computed: {
    serverAddress: {
      get () {
        return this.$store.getters.eclipseServerAddress
      },
      set (value) {
        this.tempServerAddress = value
      }
    }
  },
  methods: {
    saveServerAddress () {
      this.$store.dispatch('setEclipseServerAddress', this.tempServerAddress)
      this.editing = false
    }
  }
}
</script>

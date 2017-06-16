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
import eclipseServer from '@/services/eclipse-server'

export default {
  data () {
    return {
      editing: !!this.serverAddress,
      tempServerAddress: this.serverAddress,
      serverCheckPromise: undefined
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
    },
    getters () {
      return this.$store.getters.getters
    }
  },
  methods: {
    saveServerAddress () {
      this.$store.dispatch('setEclipseServerAddress', this.tempServerAddress)
      this.editing = false
    },
    startCheckingServer () {
      if (!this.serverAddress) { return }
      this.serverCheckPromise = eclipseServer.queryServer(this.serverAddress, this.getters).then((results) => {
        this.$store.dispatch('setGetterValues', results)
      }).then(() => {
        setTimeout(this.startCheckingServer, 500)
      })
    }
  },
  watch: {
    serverAddress (newValue, oldValue) {
      if (!oldValue && newValue) {
        this.startCheckingServer()
      }
    }
  }
}
</script>

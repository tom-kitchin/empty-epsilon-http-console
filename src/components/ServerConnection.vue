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
import _ from 'lodash'
import { batchGetAttributes } from '@/services/epsilon-server'

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
        return this.$store.getters.epsilonServerAddress
      },
      set (value) {
        this.tempServerAddress = value
      }
    },
    attributes () {
      return this.$store.getters.attributes
    }
  },
  methods: {
    saveServerAddress () {
      this.$store.dispatch('setEpsilonServerAddress', this.tempServerAddress)
      this.editing = false
    },
    startCheckingServer () {
      if (!this.serverAddress) { return }
      if (_.isEmpty(this.attributes)) { return }
      this.serverCheckPromise = batchGetAttributes(this.serverAddress, this.attributes).then((results) => {
        console.log(['server check results', results])
        this.$store.dispatch('setAttributeValues', results)
      }).then(() => {
        setTimeout(this.startCheckingServer, 500)
      }).catch((error) => {
        console.log(['Error in ServerConnection', error])
        setTimeout(this.startCheckingServer, 10000)
      })
    }
  },
  mounted () {
    this.startCheckingServer()
  }
}
</script>

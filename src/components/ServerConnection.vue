<template>
  <div v-if="editing">
    <input
      placeholder="localhost:8080"
      v-model="serverAddress"
    />
    <ui-button
      size="small"
      type="secondary"
      @click="saveServerAddress"
    >Save</ui-button>
  </div>
  <div v-else>
    <p>{{ serverAddress }}</p>
    <ui-button
      size="small"
      type="secondary"
      @click="editing = true"
    >Edit</ui-button>
  </div>
</template>

<script>
import _ from 'lodash'
import { batchGetAttributes } from 'epsilon-server'

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
      if (this.isCheckingServer()) { return }
      this.checkServer()
    },
    checkServer () {
      if (!this.serverAddress || _.isEmpty(this.attributes)) {
        this.serverCheckPromise = undefined
        return
      }
      this.serverCheckPromise = batchGetAttributes(this.serverAddress, this.attributes).then((results) => {
        this.$store.dispatch('setAttributeValues', results)
      }).then(() => {
        setTimeout(this.checkServer, 500)
      }).catch((error) => {
        console.log(['Error in ServerConnection', error])
        setTimeout(this.checkServer, 10000)
      })
    },
    isCheckingServer () {
      return (this.serverCheckPromise !== undefined)
    }
  },
  mounted () {
    this.startCheckingServer()
  },
  watch: {
    attributes () {
      this.startCheckingServer()
    },
    serverAddress () {
      this.startCheckingServer()
    }
  }
}
</script>

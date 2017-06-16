<template>
  <div id="app">
    <h1>GM Console</h1>
    <server-connection />
    <div v-if="serverIsLive">
      <getters />
    </div>
  </div>
</template>

<script>
import ServerConnection from './components/ServerConnection'
import Getters from './components/Getters'

export default {
  name: 'app',
  props: {
    config: {
      required: false,
      type: Object,
      default: {}
    }
  },
  computed: {
    serverIsLive () {
      return true
    }
  },
  components: {
    ServerConnection,
    Getters
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

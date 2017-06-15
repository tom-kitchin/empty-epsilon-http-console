<template>
  <div id="app">
    <h1>GM Console</h1>
    <state-display :state="state" />
  </div>
</template>

<script>
import StateDisplay from './components/StateDisplay.vue'

export default {
  name: 'app',
  props: {
    config: {
      required: false,
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      state: {
        hullStrength: 50,
        torpedoes: 5,
        engineeringOccupied: true,
        gameState: 'mainBattle'
      }
    }
  },
  components: {
    StateDisplay
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

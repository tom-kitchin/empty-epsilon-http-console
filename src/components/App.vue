<template>
  <div id="app">
    <h1>GM Console</h1>
    <ui-button @click="$store.dispatch('resetState')"><ui-icon>delete</ui-icon>RESET</ui-button>
    <server-connection />
    <div v-if="serverIsLive">
      <game-objects-store-wrapper />
    </div>
  </div>
</template>

<script>
import ServerConnection from '@/components/ServerConnection'
import GameObjectsStoreWrapper from '@/components/gameobjects/GameObjectsStoreWrapper'

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
    GameObjectsStoreWrapper
  }
}
</script>

<style src="normalize-css/normalize.css"></style>
<style src="material-design-icons-iconfont/dist/material-design-icons.css"></style>
<style src="keen-ui/dist/keen-ui.min.css"></style>
<style lang="sass" src="@/assets/sass/masonry.sass"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

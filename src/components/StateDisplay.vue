<template>
  <div>
    <game-object
      v-for="(stateValue, stateName) in state"
      key="stateName"
      :name="stateName"
      :initialGameObject="stateValue"
    />
  </div>
</template>

<script>
import GameObject from '@/components/GameObject'

export default {
  name: 'state-display',
  props: {
    initialState: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      state: this.initialState
    }
  },
  components: {
    GameObject
  }
}
</script>

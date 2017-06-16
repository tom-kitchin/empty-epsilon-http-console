<template>
  <div>
    <game-object
      v-for="(entryValue, entryName) in state"
      key="entryName"
      :name="entryName"
      :actions="entryValue.actions"
      :getters="entryValue.getters"
    />
  </div>
</template>

<script>
import GameObject from '@/components/GameObject'

export default {
  name: 'state-display',
  props: {
    state: {
      required: true,
      type: Object
    }
  },
  components: {
    'game-object': GameObject
  }
}
</script>

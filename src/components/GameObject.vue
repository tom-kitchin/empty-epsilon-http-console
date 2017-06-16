<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>Getters</h3>
    <div>
      <getter
        v-for="(getterValue, getterName) in getters"
        key="getterName"
        :name="getterName"
        :value="getterValue"
      />
      <add-getter />
    </div>
    <h3>Actions</h3>
    <div>
      <action
        v-for="actionName in actions"
        key="actionName"
        :name="actionName"
      />
    </div>
  </div>
</template>

<script>
import Getter from '@/components/Getter'
import Action from '@/components/Action'
import AddGetter from '@/components/AddGetter'

export default {
  name: 'game-object',
  props: {
    name: {
      required: true,
      type: String
    },
    getters: {
      required: false,
      type: Object,
      default: {}
    },
    actions: {
      required: false,
      type: Array,
      default: {}
    }
  },
  components: {
    'getter': Getter,
    'action': Action,
    'add-getter': AddGetter
  }
}
</script>

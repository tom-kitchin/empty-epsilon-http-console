<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>Getters</h3>
    <div>
      <getter
        v-for="(getterValue, getterName) in getters"
        key="getterName"
        :name="getterName"
        :getter="getterValue"
      />
      <add-getter @addGetter="addGetterToGameObject" />
    </div>
    <h3>Actions</h3>
    <div>
      <action
        v-for="(actionValue, actionName) in actions"
        key="actionName"
        :name="actionName"
        :action="actionValue"
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
    initialGameObject: {
      required: false,
      default: {},
      type: Object
    }
  },
  data () {
    return {
      gameObject: this.initialGameObject
    }
  },
  computed: {
    getters: {
      get () {
        return this.gameObject.getters
      },
      set (value) {
        this.gameObject.getters = value
      }
    },
    actions () {
      return this.gameObject.actions
    }
  },
  methods: {
    addGetterToGameObject (name) {
      this.getters = {
        ...this.getters,
        [name]: ''
      }
    }
  },
  components: {
    Getter,
    Action,
    AddGetter
  }
}
</script>

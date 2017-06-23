<template>
  <div>
    <ui-textbox
      v-model="name"
      placeholder="Object name"
      :required="true"
      :autofocus="true"
    />
    <ui-textbox
      v-model="method"
      placeholder="Object get method"
      :required="true"
      :autofocus="true"
    />
    <div class="add-gameobject-buttons">
      <ui-button
        type="primary"
        color="primary"
        size="small"
        :disabled="!isValidInputs"
        @click="saveGameObject"
      >Save</ui-button>
      <ui-button
        type="secondary"
        color="primary"
        size="small"
        @click="$emit('cancel')"
      >Cancel</ui-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialName: {
      required: false,
      type: String,
      default: ''
    },
    initialMethod: {
      required: false,
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: this.initialName,
      method: this.initialMethod
    }
  },
  computed: {
    isValidInputs () {
      return (this.name && this.method)
    }
  },
  methods: {
    saveGameObject () {
      if (this.isValidInputs) {
        this.$emit('saveGameObject', {
          name: this.name,
          method: this.method
        })
        this.name = ''
        this.method = ''
      }
    }
  }
}
</script>

<style>
.add-gameobject-buttons {
  display: inline-block;
}
</style>

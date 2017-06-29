<template>
  <div>
    <ui-textbox
      v-model="name"
      placeholder="Attribute name"
      :required="true"
      :autofocus="true"
    />
    <ui-textbox
      v-model="method"
      placeholder="Attribute get method"
      :required="true"
    />
    <div class="add-attribute-buttons">
      <ui-button
        type="primary"
        color="primary"
        size="small"
        :disabled="!isValidInputs"
        @click="saveAttribute"
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
    saveAttribute () {
      if (this.isValidInputs) {
        this.$emit('saveAttribute', {
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
.add-attribute-buttons {
  display: inline-block;
}
</style>

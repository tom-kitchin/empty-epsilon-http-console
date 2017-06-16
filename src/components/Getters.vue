<template>
  <div>
    <h2>Getters</h2>
    <getter
      v-for="getter in getters"
      key="getter.id"
      :getter="getter"
    />
    <add-getter @addGetter="addGetter" />
  </div>
</template>

<script>
import Getter from '@/components/Getter'
import AddGetter from '@/components/AddGetter'

export default {
  computed: {
    getters () {
      return this.$store.getters.getters
    }
  },
  methods: {
    addGetter (name) {
      this.$store.dispatch('addGetter', { name })
    }
  },
  components: {
    Getter,
    AddGetter
  }
}
</script>

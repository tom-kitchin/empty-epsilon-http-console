<template>
  <div>
    <h2>Getters</h2>
    <getter
      v-for="getter in getters"
      key="getter.id"
      :getter="getter"
    />
    <add-getter />
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
  components: {
    Getter,
    AddGetter
  }
}
</script>

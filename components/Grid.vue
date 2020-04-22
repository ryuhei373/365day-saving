<template>
  <div
    class="z-0 w-full grid grid-cols-6 gap-0 border-gray-600 border-l-2 overflow-x-hidden pb-8-safe"
  >
    <cell v-for="n in 365" :key="n" :number="n" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cell from '~/components/Cell.vue'
export default Vue.extend({
  components: {
    Cell
  },

  data() {
    return { daysInYear: [...Array(365).keys()] }
  }
})
</script>

<style></style>

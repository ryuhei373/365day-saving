<template>
  <div class="bg-red-500 w-full h-16 overflow-x-hidden">
    <span class="text-gray-100 text-xl">365日メンダコ貯金</span>
    <total />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Total from '~/components/Total.vue'

export default Vue.extend({
  components: {
    Total
  }
})
</script>

<style></style>

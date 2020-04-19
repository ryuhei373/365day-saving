<template>
  <div v-on:click="doneToggle" v-bind:class="{ 'bg-yellow-300': isDone }" class="relative flex justify-center items-center aspect-ratio-for-cell border-gray-600 border-solid border-b-2 border-r-2">
    <span class="absolute top-for-cell w-full h-0 text-2xl text-gray-500">{{ number }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  data: function() {
    return {
      isDone: false
    }
  },

  props: {
    number: {
      type: Number,
      required: true
    }
  },
  
  methods: {
    doneToggle: function() {
      this.isDone = !this.isDone
    }
  }
})
</script>

<style>

</style>
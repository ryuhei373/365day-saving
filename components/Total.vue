<template>
  <div>
    <span class="text-gray-100">貯金総額：{{ count }}円</span>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { TotalState } from '~/store/total'

@Component
export default class CounterComponent extends Vue {

  get count () : number {
    return (this.$store.state.total as TotalState).total
  }
}
</script>
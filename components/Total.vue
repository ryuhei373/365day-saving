<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { TotalState } from '~/store/total'

@Component
export default class CounterComponent extends Vue {

  get count () : number {
    console.log('Call the computed count')
    return (this.$store.state.total as TotalState).total
  }

  // 「+」ボタンクリック時に呼ばれる
  increment () : void {
    console.log('Call the methods increment')
    // mutations の increment を呼び出す
    this.$store.commit('counter/increment')
  }

  // 「-」ボタンクリック時に呼ばれる
  decrement () : void {
    console.log('Call the methods decrement')
    // mutations の decrement を呼び出す
    this.$store.commit('counter/decrement')
  }
}
</script>
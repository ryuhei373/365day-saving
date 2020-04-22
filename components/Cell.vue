<template>
  <div
    :class="{ 'bg-yellow-300': isDone }"
    class="relative flex justify-center items-center aspect-ratio-for-cell border-gray-600 border-solid border-b-2 border-r-2"
    @click="doneToggle"
  >
    <span class="absolute top-for-cell w-full h-0 text-2xl text-gray-500 select-none">{{
      number
    }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Cell extends Vue {
  isDone = false;

  doneToggle(number: number) {
    this.isDone = !this.isDone
    this.isDone ? this.add() : this.subtract()
  }

  // 「+」ボタンクリック時に呼ばれる
  add () : void {
    // mutations の increment を呼び出す
    this.$store.commit('total/add', {
      amount: this.number
    })
  }

  // 「-」ボタンクリック時に呼ばれる
  subtract () : void {
    // mutations の decrement を呼び出す
    this.$store.commit('total/subtract', {
      amount: this.number
    })
  }

  @Prop({ type: Number, required: true })
  number!: number;
}
</script>

<style></style>

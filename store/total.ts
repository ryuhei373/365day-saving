import { MutationTree } from 'vuex'

export const state = () => ({
  total: 0
})

export type TotalState = ReturnType<typeof state>

export const mutations: MutationTree<TotalState> = {
  add: (state, payload) => {
    state.total += payload.amount
  },
  subtract: (state, payload) => {
    state.total -= payload.amount
  }
}

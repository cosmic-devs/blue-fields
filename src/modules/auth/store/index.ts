import { Module } from 'vuex'
import { AuthState, initialState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const authStore: Module<any, AuthState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}

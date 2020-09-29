import { Module } from 'vuex'
import { DashboardState, initialState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const dashboardStore: Module<any, DashboardState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}

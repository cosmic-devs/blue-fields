import { GetterTree } from 'vuex'
import { DashboardState } from './state'

export const DASHBOARD_STATUS = 'DASHBOARD_STATUS'

export const getters: GetterTree<any, DashboardState> = {
  [DASHBOARD_STATUS]: (state) => state.status
}

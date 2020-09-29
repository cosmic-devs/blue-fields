import { DashboardState } from './state'
import {
  API_REQUEST,
  API_ERROR
} from '../../../modules/dashboard/store/action-types'
import { RequestStatus } from '../../../enums'

export const mutations = {
  [API_REQUEST](state: DashboardState) {
    state.status = RequestStatus.LOADING
  },
  [API_ERROR](state: DashboardState) {
    state.status = RequestStatus.ERROR
  }
}

import { AuthState } from './state'
import { Project, User } from 'vue-modules'
import { RequestStatus, AuthStatus } from '../../../enums'
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  ME_REQUEST,
  ME_ERROR,
  ME_SUCCESS,
  ADD_PROJECT
} from '../../../modules/auth/store/action-types'

export const mutations = {
  [AUTH_REQUEST](state: AuthState) {
    state.authStatus = AuthStatus.LOADING
  },
  [AUTH_SUCCESS](
    state: AuthState,
    { token, user }: { token: string; user: User }
  ) {
    state.authStatus = AuthStatus.SUCCESS
    state.token = token
    state.me = user
  },
  [AUTH_ERROR](state: AuthState) {
    state.authStatus = AuthStatus.ERROR
  },
  [ME_REQUEST](state: AuthState) {
    state.status = RequestStatus.LOADING
  },
  [ME_ERROR](state: AuthState) {
    state.status = RequestStatus.ERROR
  },
  [ME_SUCCESS](state: AuthState, me: User) {
    state.status = RequestStatus.SUCCESS
    state.me = me
  },
  [LOGOUT](state: AuthState) {
    state.status = RequestStatus.SUCCESS
    state.authStatus = AuthStatus.OUT
    state.token = ''
  },
  [ADD_PROJECT](state: AuthState, project: Project) {
    state.me.projects.data.push(project)
  }
}

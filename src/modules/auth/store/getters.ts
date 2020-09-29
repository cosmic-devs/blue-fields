import { GetterTree } from 'vuex'
import { AuthState } from './state'

export const AUTH_STATUS = 'AUTH_STATUS'
export const STATUS = 'STATUS'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const ME = 'ME'
export const USER_PROJECTS = 'USER_PROJECTS'

export const getters: GetterTree<any, AuthState> = {
  [AUTH_STATUS]: (state) => state.authStatus,
  [STATUS]: (state) => state.status,
  [IS_LOGGED_IN]: (state) => !!state.token,
  [ME]: (state: AuthState) => state.me,
  [USER_PROJECTS]: (state: AuthState) => state.me.projects.data,
}

import { GetterTree } from 'vuex'
import { HomeState } from './state'

export const GET_PROJECTS = 'GET_PROJECTS'
export const getters: GetterTree<any, HomeState> = {
  [GET_PROJECTS]: (state: HomeState) => state.projects
}

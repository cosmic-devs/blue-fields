import { ActionTree } from 'vuex'
import { HomeState } from './state'
import { ADD_PROJECT } from '../../../modules/home/store/action-types'
import { Project } from 'vue-modules'

export const actions: ActionTree<any, HomeState> = {
  [ADD_PROJECT]({ commit }, project: Project) {
    commit(ADD_PROJECT, project)
  }
}

import { HomeState } from './state'
import { ADD_PROJECT } from '../../../modules/home/store/action-types'
import { Project } from 'vue-modules'

export const mutations = {
  [ADD_PROJECT](state: HomeState, project: Project) {
    state.projects.unshift(project)
  }
}

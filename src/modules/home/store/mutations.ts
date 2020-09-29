import { HomeState } from './state'
import {
  API_REQUEST,
  API_ERROR,
  ALL_PROJECTS,
  ADD_PROJECT
} from '../../../modules/home/store/action-types'
import { Project } from 'vue-modules'
import { RequestStatus } from '../../../enums'

export const mutations = {
  [ALL_PROJECTS](state: HomeState, projects: Project[]) {
    state.projects = projects
  },
  [ADD_PROJECT](state: HomeState, project: Project) {
    state.projects.push(project)
  },
  [API_REQUEST](state: HomeState) {
    state.status = RequestStatus.LOADING
  },
  [API_ERROR](state: HomeState) {
    state.status = RequestStatus.ERROR
  }
}

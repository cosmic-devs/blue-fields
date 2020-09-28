import { Project } from 'vue-modules'
import { RequestStatus } from '../../../enums'

export interface HomeState {
  status: RequestStatus
  projects: Project[]
}

export const initialState: HomeState = {
  status: RequestStatus.SUCCESS,
  projects: []
}

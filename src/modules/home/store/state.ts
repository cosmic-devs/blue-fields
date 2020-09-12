import { Project } from 'vue-modules'

export interface HomeState {
  projects: Project[]
}

export const initialState: HomeState = {
  projects: []
}

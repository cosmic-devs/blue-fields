import { ActionTree } from 'vuex'
import { DashboardState } from './state'
import { CreateProjectInput, Project } from 'vue-modules'
import ApolloClient from 'apollo-client'
import { createApolloClient } from '../../apollo'
import {
  API_ERROR,
  API_REQUEST,
  ADD_PROJECT
} from '../../../modules/dashboard/store/action-types'
import { CREATE_PROJECT } from '../../dashboard/apollo/mutations'

const graphqlClient: ApolloClient<any> = createApolloClient()

export const actions: ActionTree<any, DashboardState> = {
  [ADD_PROJECT]({ commit }, payload: CreateProjectInput) {
    return new Promise((resolve, reject) => {
      commit(API_REQUEST)
      graphqlClient
        .mutate({
          mutation: CREATE_PROJECT,
          variables: { project: { ...payload } }
        })
        .then(({ data }) => {
          const project: Project = data.createProject
          commit('auth/ADD_PROJECT', project, { root: true })
          commit('home/ADD_PROJECT', project, { root: true })
          resolve(data)
        })
        .catch((err) => {
          if (err.message.includes('Invalid database secret.')) {
            localStorage.removeItem('token')
            commit('auth/LOGOUT', null, { root: true })
          }
          commit(API_ERROR)
          reject(err)
        })
    })
  }
}

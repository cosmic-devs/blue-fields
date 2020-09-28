import { ActionTree } from 'vuex'
import { HomeState } from './state'
import { Project } from 'vue-modules'
import ApolloClient from 'apollo-client'
import { createApolloClient } from '../../apollo'
import { GET_ALL_PROJECTS } from '../apollo/queries'
import {
  API_ERROR,
  API_REQUEST,
  ALL_PROJECTS
} from '../../../modules/home/store/action-types'

const graphqlClient: ApolloClient<any> = createApolloClient()

export const actions: ActionTree<any, HomeState> = {
  [ALL_PROJECTS]({ commit }) {
    return new Promise((resolve, reject) => {
      commit(API_REQUEST)
      graphqlClient
        .query({ query: GET_ALL_PROJECTS })
        .then(({ data }) => {
          const projects: Project[] = data.allProjects.data
          commit(ALL_PROJECTS, projects)
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

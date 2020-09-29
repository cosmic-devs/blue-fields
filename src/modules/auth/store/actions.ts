import { ActionTree } from 'vuex'
import { AuthState } from './state'
import ApolloClient from 'apollo-client'
import { createApolloClient } from '../../apollo'
import { CreateUserInput, LoginUserInput, User } from 'vue-modules'
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../apollo/mutations'
import { GET_ME } from '../apollo/queries'
import {
  AUTH_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  REGISTER,
  LOGIN,
  LOGOUT,
  ME_ERROR,
  ME_REQUEST,
  ME_SUCCESS,
  ME
} from '../../../modules/auth/store/action-types'

const graphqlClient: ApolloClient<any> = createApolloClient()

export const actions: ActionTree<any, AuthState> = {
  [REGISTER]({ commit }, payload: CreateUserInput) {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      graphqlClient
        .mutate({
          mutation: REGISTER_USER,
          variables: { user: { ...payload } }
        })
        .then(({ data }) => {
          const token: string = data.createUser.token
          const user: User = data.createUser.user
          localStorage.setItem('token', token)
          commit(AUTH_SUCCESS, { token, user })
          resolve(data)
        })
        .catch((err) => {
          localStorage.removeItem('token')
          commit(AUTH_ERROR)
          reject(err)
        })
    })
  },
  [LOGIN]({ commit }, payload: LoginUserInput) {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      graphqlClient
        .mutate({
          mutation: LOGIN_USER,
          variables: { ...payload }
        })
        .then(({ data }) => {
          const token: string = data.loginUser.token
          const user: User = data.loginUser.user
          localStorage.setItem('token', token)
          commit(AUTH_SUCCESS, { token, user })
          resolve(data)
        })
        .catch((err) => {
          localStorage.removeItem('token')
          commit(AUTH_ERROR)
          reject(err)
        })
    })
  },
  [ME]({ commit }) {
    return new Promise((resolve, reject) => {
      commit(ME_REQUEST)
      graphqlClient
        .query({ query: GET_ME })
        .then(({ data }) => {
          const user: User = data.me
          commit(ME_SUCCESS, user)
          resolve(data)
        })
        .catch((err) => {
          if (err.message.includes('Invalid database secret.')) {
            commit(LOGOUT)
            localStorage.removeItem('token')
          }
          commit(ME_ERROR)
          reject(err)
        })
    })
  },
  [LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      graphqlClient
        .mutate({ mutation: LOGOUT_USER })
        .then(({ data }) => {
          localStorage.removeItem('token')
          commit(LOGOUT)
          resolve(data)
        })
        .catch((err) => {
          if (err.message.includes('Invalid database secret.')) {
            localStorage.removeItem('token')
            commit(LOGOUT)
          }
          commit(AUTH_ERROR)
          reject(err)
        })
    })
  }
}

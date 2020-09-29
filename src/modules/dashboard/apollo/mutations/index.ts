import gql from 'graphql-tag'

export const CREATE_PROJECT = gql`
  mutation createProject($project: CreateProjectInput!) {
    createProject(data: $project) {
      _id
      title
    }
  }
`

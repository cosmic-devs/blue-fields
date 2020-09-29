import gql from 'graphql-tag'

export const GET_ALL_PROJECTS = gql`
  query allProjects {
    allProjects {
      data {
        _id
        title
        description
      }
    }
  }
`

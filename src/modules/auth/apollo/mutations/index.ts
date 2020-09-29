import gql from 'graphql-tag'

export const REGISTER_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(data: $user) {
      token
      user {
        _id
        approved
        country_code
        email
        email_verified
        first_name
        last_name
        phone_number
        status
        projects {
          data {
            _id
            title
          }
        }
      }
    }
  }
`

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
      user {
        _id
        approved
        country_code
        email
        email_verified
        first_name
        last_name
        phone_number
        status
        projects {
          data {
            _id
            title
          }
        }
      }
    }
  }
`

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`

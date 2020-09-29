import gql from 'graphql-tag'

export const GET_ME = gql`
  query me {
    me {
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
`

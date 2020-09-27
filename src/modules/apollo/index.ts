import { createHttpLink, HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'

export const createApolloClient: () => ApolloClient<any> = () => {
  const getToken: () => string | undefined = () => {
    const token = localStorage.getItem('token')
    return token
      ? `Bearer ${token}`
      : `Bearer ${import.meta.env.VITE_FAUNADB_TOKEN}`
  }

  const cache = new InMemoryCache() as InMemoryCache
  const httpLink = createHttpLink({
    uri: 'https://graphql.fauna.com/graphql'
  }) as HttpLink

  const authLink = setContext((_: any, { headers }: { headers: any }) => {
    // return the headers to the context so HTTP link can read them
    return {
      headers: {
        ...headers,
        authorization: getToken()
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  })
}

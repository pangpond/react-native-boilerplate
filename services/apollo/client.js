import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

import * as config from '../../constants/Config'
import { store } from '../store'

const httpLink = createHttpLink({
  uri: config.apolloURI,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().session.tokens.access.value

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client

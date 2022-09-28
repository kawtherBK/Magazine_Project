import '../styles/globals.css'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import type { AppProps } from 'next/app'

const client = new ApolloClient({
  uri: 'http://localhost/jannah/graphql',
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp


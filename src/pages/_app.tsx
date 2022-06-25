import "../styles/globals.css"
import { ApolloProvider } from '@apollo/client'
import { client } from "../services/apollo"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp

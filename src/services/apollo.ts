import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o68us00rew01xx37ct56q6/master",
  cache: new InMemoryCache(),
})
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    } 
  }
`

export default function Home() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <h1 className="text-3xl font-bold underline">Hello Ignite Lab</h1>
  )
}

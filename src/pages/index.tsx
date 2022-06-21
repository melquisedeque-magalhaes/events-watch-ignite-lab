import { useEffect } from "react"
import { client } from "../services/apollo"
import { gql } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    } 
  }
`

export default function Home() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response => {
      console.log(response.data)
    })
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">Hello Ignite Lab</h1>
  )
}

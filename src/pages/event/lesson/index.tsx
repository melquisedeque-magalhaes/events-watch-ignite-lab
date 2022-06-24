import { GetServerSideProps } from "next"
import { client } from "../../../services/apollo"
import { LessonsGql } from "../../../services/gql/query/Lessons"
import { LessonsTypes } from "../../../typings/Lessons"

export default function LessonRedirect() {
  return <h1>redirect...</h1>
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data } = await client.query<LessonsTypes>({
    query: LessonsGql
  })

  return {
    redirect: {
      destination: `/event/lesson/${data.lessons[0].slug}`,
      permanent: false
    }
  }
}
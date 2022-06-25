import { GetServerSideProps } from "next"
import { client } from "../../services/apollo"
import { GetLessonsDocument } from "../../typings/generated"
import { LessonsTypes } from "../../typings/Lessons"

export default function EventRedirect() {
  return null
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data } = await client.query<LessonsTypes>({
    query: GetLessonsDocument
  })

  return {
    redirect: {
      destination: `/event/lesson/${data.lessons[0].slug}`,
      permanent: false
    }
  }
}
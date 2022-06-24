import { GetServerSideProps } from "next";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/SiderBar";
import { Video } from "../../../components/Video";
import { client } from "../../../services/apollo";
import { GET_LESSON_BY_SLUG } from "../../../services/gql/query/LessonBySlug";

interface getLessonBySlugResponse {
  lesson: {
     title: string
     description: string
     id: string
     videoId: string
     teacher: {
       name: string
       bio: string
       avatarURL: string
     }
  }
 }

export default function EventLesson({ lesson }: getLessonBySlugResponse) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video lesson={lesson} />
        <Sidebar />
      </main>
    </div>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { slug } = context.query

  const { data } = await client.query<getLessonBySlugResponse>({
    query: GET_LESSON_BY_SLUG,
    variables: {
      slug: slug
    }
  })

  return {
    props: {
      lesson: data.lesson
    }
  }
}
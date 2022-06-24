import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { Header } from "../../../components/Header";
import { Video } from "../../../components/Video";
import { client } from "../../../services/apollo";
import { LessonBySlugGql } from "../../../services/gql/query/LessonBySlug";
import { LessonTypes } from "../../../typings/Lesson";

const Sidebar = dynamic(() => import('../../../components/SideBar'), {
  ssr: false,
})

export default function EventLesson({ lesson }: LessonTypes) {

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

  const { data } = await client.query<LessonTypes>({
    query: LessonBySlugGql,
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
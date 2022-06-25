import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { getSession } from 'next-auth/react'

import { Header } from "../../../components/Header";
import { Video } from "../../../components/Video";
import { client } from "../../../services/apollo";
import { LessonTypes } from "../../../typings/Lesson";
import { GetLessonBySlugDocument, GetLessonsDocument } from "../../../typings/generated";
import { LessonsTypes } from "../../../typings/Lessons";

const Sidebar = dynamic(() => import('../../../components/SideBar'), {
  ssr: false,
})

interface EventLessonProps {
  lesson: LessonTypes,
  lessons: LessonsTypes,
}

export default function EventLesson({ lesson, lessons }: EventLessonProps) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video lesson={lesson.lesson} />
        <Sidebar lessons={lessons.lessons} />
      </main>
    </div>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context)

  if(!session){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { slug } = context.query

  const { data: LessonResponse } = await client.query<LessonTypes>({
    query: GetLessonBySlugDocument,
    variables: {
      slug: slug
    }
  })

  const { data: LessonsResponse } = await client.query<LessonsTypes>({
    query: GetLessonsDocument
  })

  return {
    props: {
      lesson: LessonResponse,
      lessons: LessonsResponse
    }
  }
}
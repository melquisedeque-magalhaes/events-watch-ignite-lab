import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'

import { Header } from '../../../components/Header'
import { Video } from '../../../components/Video'
import { client } from '../../../services/apollo'
import {
  GetLessonBySlugDocument,
  GetLessonsDocument,
} from '../../../typings/generated'
import { LessonsTypes } from '../../../typings/Lessons'
import { LessonType } from '../../../typings/Lesson'

const Sidebar = dynamic(() => import('../../../components/SideBar'), {
  ssr: false,
})

interface EventLessonProps {
  lessons: LessonsTypes
  lesson: LessonType
}

export default function EventLesson({ lessons, lesson }: EventLessonProps) {
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

  const { query } = context

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { data } = await client.query({
    query: GetLessonBySlugDocument,
    variables: {
      slug: query.slug,
    },
  })

  const { data: LessonsResponse } = await client.query<LessonsTypes>({
    query: GetLessonsDocument,
  })

  return {
    props: {
      lessons: LessonsResponse,
      lesson: data,
    },
  }
}

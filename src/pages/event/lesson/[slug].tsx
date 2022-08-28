import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'

import { Header } from '../../../components/Header'
import { Video } from '../../../components/Video'
import { client } from '../../../services/apollo'
import { GetLessonsDocument } from '../../../typings/generated'
import { LessonsTypes } from '../../../typings/Lessons'

const Sidebar = dynamic(() => import('../../../components/SideBar'), {
  ssr: false,
})

interface EventLessonProps {
  lessons: LessonsTypes
}

export default function EventLesson({ lessons }: EventLessonProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />

        <Sidebar lessons={lessons.lessons} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { data: LessonsResponse } = await client.query<LessonsTypes>({
    query: GetLessonsDocument,
  })

  return {
    props: {
      lessons: LessonsResponse,
    },
  }
}

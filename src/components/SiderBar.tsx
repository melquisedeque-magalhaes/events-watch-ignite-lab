import { Lesson } from "./Lesson";
import { LESSON_QUERY_GQL } from "../services/gql/LESSON_QUERY_GQL";
import { useQuery } from "@apollo/client";

interface GetLessonQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    lessonType: 'live' | 'class'
    availableAt: string
  }[]
}

export function Sidebar() {

  const { data } = useQuery<GetLessonQueryResponse>(LESSON_QUERY_GQL)

  return (
    <aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">Cronograma das aulas</span>

      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => (
            <Lesson key={lesson.id} title={lesson.title} availableAt={new Date(lesson.availableAt)} slug={lesson.slug} type={lesson.lessonType} />
          ))
        }
        
      </div>
     
    </aside>
  )
}
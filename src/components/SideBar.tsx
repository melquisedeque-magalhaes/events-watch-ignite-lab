import { Lesson } from "./Lesson";
import { useQuery } from "@apollo/client";
import { LessonsGql } from "../services/gql/query/Lessons";
import { LessonsTypes } from "../typings/Lessons";

export default function Sidebar() {

  const { data } = useQuery<LessonsTypes>(LessonsGql)

  return (
    <aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">Cronograma das aulas</span>

      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => (
            <Lesson 
              key={lesson.id} 
              title={lesson.title} 
              availableAt={new Date(lesson.availableAt)} 
              slug={lesson.slug} 
              type={lesson.lessonType} 
            />
          ))
        }
        
      </div>
     
    </aside>
  )
}
import { Lesson } from "./Lesson";
import { useQuery } from "@apollo/client";
import { LessonsGql } from "../services/gql/query/Lessons";
import { LessonsTypes } from "../typings/Lessons";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { SignOut } from "phosphor-react";

export default function Sidebar() {

  const { data } = useQuery<LessonsTypes>(LessonsGql)

  const router = useRouter()

  const { slug } = router.query

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
              isActive={slug === lesson.slug}
            />
          ))
        }
        
      </div>

      <button 
        onClick={() => signOut()}
        className="mt-10 w-full font-bold uppercase text-sm bg-green-500 rounded py-4 flex items-center justify-center hover:bg-green-700 transition-colors gap-2"
      >
        <SignOut size={24} />  
        <span>
          Sair
        </span>
      </button>
     
    </aside>
  )
}
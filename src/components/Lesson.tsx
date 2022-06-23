import Link from "next/link";
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt, 
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm", 
    { locale:  ptBr}
  )

  return (
    <Link href={slug} className="cursor-pointer">
      <div>
        <span className="text-base text-gray-300">
          {availableDateFormatted}
        </span>

        <div className="flex flex-col border border-gray-500 mt-2 rounded p-4">
          <header className="flex justify-between items-center mb-4">
          
            {
              isLessonAvailable ? (
                <span className="font-semibold text-blue-500 text-sm flex items-center justify-center gap-2">
                  <CheckCircle size={20} />

                  Conteúdo liberado
                </span>
              ) : (
                <span className="font-semibold text-orange-500 text-sm flex items-center justify-center gap-2">
                  <Lock size={20} />

                  Em breve
                </span>
              )
            }

            <span className={`py-[0.125rem] px-2 rounded border border-green-300 ${type === 'live' ? 'text-green-300' : 'text-white'} uppercase text-xs`}>
              {type === 'live' ? "ao vivo" : "aula prática"} 
            </span>

          </header>

          <strong className="text-base text-gray-200">
            {title}
          </strong>
        </div>
      </div>
    </Link>
  )
}
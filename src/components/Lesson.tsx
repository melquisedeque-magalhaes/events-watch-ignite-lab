import Link from "next/link";
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
  isActive: boolean
}

export function Lesson({ availableAt, slug, title, type, isActive }: LessonProps) {

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt, 
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm", 
    { locale:  ptBr}
  )

  return (
    <Link href={`/event/lesson/${slug}`}>
      <div className="cursor-pointer group">
        <span className="text-base text-gray-300">
          {availableDateFormatted}
        </span>

        <div className={`flex flex-col border border-gray-500 mt-2 rounded p-4 group-hover:border-green-700 ${isActive && 'bg-green-500 border-green-500 transition-colors'}` }>
          <header className="flex justify-between items-center mb-4">
          
            {
              isLessonAvailable ? (
                <span className={`font-semibold text-blue-500 text-sm flex items-center justify-center gap-2 ${isActive && 'text-white transition-colors'}`}>
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

            <span className={`py-[0.125rem] px-2 rounded border border-green-300 font-bold text-white uppercase text-xs ${isActive && 'text-white border-white transition-colors'}`}>
              {type === 'live' ? "ao vivo" : "aula prática"} 
            </span>

          </header>

          <strong className={`text-base text-gray-200 ${isActive && 'text-white transition-colors'}`}>
            {title}
          </strong>
        </div>
      </div>
    </Link>
  )
}
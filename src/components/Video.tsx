import { DiscordLogo, Lightning } from "phosphor-react"
import { ButtonFullLink } from "./ButtonFullLink"
import { ButtonLink } from "./ButtonLink"
import dynamic from 'next/dynamic'

const PlayVideo = dynamic(() => import('./PlayVideo'), {
  ssr: false,
})

interface VideoProps {
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

export function Video({ lesson }: VideoProps) {

  return (
    <div className="flex-1">

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <PlayVideo youtubeVideoId={lesson?.videoId} />
        </div>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex justify-center mt-8 gap-16 h-full w-full max-w-[1100px]">

          <div className="flex flex-col  gap-4 leading-relaxed">

            <strong className="text-2xl text-gray-100">
              {lesson?.title}
            </strong>

            <p className="text-base text-gray-200">
              {lesson?.description}
            </p>

            <div className="flex mt-6 gap-4 leading-relaxed">
              <img 
                src={lesson?.teacher.avatarURL}
                alt={lesson?.teacher.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />

              <div>
                <span className="font-bold text-2xl text-gray-100">{lesson?.teacher.name}</span>
                <p className="text-sm text-gray-300">{lesson?.teacher.bio}</p>
              </div>

            </div>


            <div className="my-[80px] flex gap-8">
              <ButtonFullLink 
                icon="File" 
                title="Material complementar" 
                description="Acesse o material complementar para acelerar o seu desenvolvimento" 
              />

              <ButtonFullLink 
                icon="Image" 
                title="Wallpapers exclusivos" 
                description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" 
              />
            </div>
            
          </div>

          <div className="flex flex-col min-w-[240px] gap-4">

            <ButtonLink>
              <DiscordLogo size={24} />
              <span>
                Comunidade no discord
              </span>
            </ButtonLink>

            <ButtonLink variant="Secondary">
              <Lightning size={24} />
              <span>
                Acesse o desafio
              </span>
            </ButtonLink>

          </div>

        </div>

      </div> 
      
    </div>
  )
}


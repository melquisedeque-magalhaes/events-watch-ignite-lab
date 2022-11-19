import { LessonInfos } from './LessonInfos'
import { LinksExtras } from './LinksExtras'
import { LinkChallengeAndCommunity } from './LinkChallengeAndCommunity'
import { LessonType } from '../typings/Lesson'
import { ContainerVideo } from './ContainerVIdeo'
// import { useGetLessonBySlugQuery } from '../typings/generated'

// import Lottie from 'react-lottie'
// import loadingAnimation from '../animations/loading.json'

export function Video({ lesson }: LessonType) {
  // const { data } = useGetLessonBySlugQuery()

  // if (loading && !error) {
  //   return (
  //     <Lottie
  //       options={{
  //         animationData: loadingAnimation,
  //       }}
  //       height={400}
  //       width={400}
  //     />
  //   )
  // }

  return (
    <div className="flex-1">
      <ContainerVideo videoId={lesson?.videoId} />

      <div className="p-8 mx-auto w-full max-w-[1100px]">
        <div className="flex items-start gap-6">
          <LessonInfos
            title={lesson?.title}
            description={lesson?.description}
            teacher={lesson?.teacher}
          />

          <LinkChallengeAndCommunity />
        </div>

        <LinksExtras />
      </div>
    </div>
  )
}

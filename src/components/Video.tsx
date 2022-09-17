import { LessonInfos } from './LessonInfos'
import { ContainerVideo } from './ContainerVideo'
import { LinksExtras } from './LinksExtras'
import { LinkChallengeAndCommunity } from './LinkChallengeAndCommunity'
import { useGetLessonBySlugQuery } from '../typings/generated'
import { useRouter } from 'next/router'

import Lottie from 'react-lottie'
import loadingAnimation from '../animations/loading.json'

export function Video() {


  const { query } = useRouter()

  const { slug } = query

  const convertSlug = String(slug)

  console.log(convertSlug)

  const { data, loading, error } = useGetLessonBySlugQuery({
    variables: {
      slug: convertSlug,
    },
  })

  console.log(data)



  if (loading && !error) {
    return (
      <Lottie
        options={{
          animationData: loadingAnimation,
        }}
        height={400}
        width={400}
      />
    )
  }

  return (
    <div className="flex-1">
      <ContainerVideo videoId={data?.lesson?.videoId} />

      <div className="p-8 mx-auto w-full max-w-[1100px]">
        <div className="flex items-start gap-6">
          <LessonInfos
            title={data?.lesson?.title}
            description={data?.lesson?.description}
            teacher={data?.lesson?.teacher}
          />

          <LinkChallengeAndCommunity />
        </div>

        <LinksExtras />
      </div>
    </div>
  )
}

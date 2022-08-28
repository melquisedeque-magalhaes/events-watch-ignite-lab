import dynamic from 'next/dynamic'

const PlayVideo = dynamic(() => import('./PlayVideo'), {
  ssr: false,
})

interface ContainerVideoProps {
  videoId: string
}

export function ContainerVideo({ videoId }: ContainerVideoProps) {
  return (
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <PlayVideo youtubeVideoId={videoId} />
      </div>
    </div>
  )
}

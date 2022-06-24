import { DefaultUi, Player, Youtube } from "@vime/react"

import '@vime/core/themes/default.css';

interface PlayVideoProps {
  youtubeVideoId: string
}

export default function PlayVideo({ youtubeVideoId }: PlayVideoProps) {
  return (
    <Player>
      <Youtube videoId={youtubeVideoId} />
      <DefaultUi />
    </Player>
  )
}
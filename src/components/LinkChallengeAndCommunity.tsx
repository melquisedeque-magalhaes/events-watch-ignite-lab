import { DiscordLogo, Lightning } from 'phosphor-react'
import { ButtonLink } from './ButtonLink'

export function LinkChallengeAndCommunity() {
  return (
    <div className="flex flex-col min-w-[240px] gap-4">
      <ButtonLink>
        <DiscordLogo size={24} />
        <span>Comunidade no discord</span>
      </ButtonLink>

      <ButtonLink variant="Secondary">
        <Lightning size={24} />
        <span>Acesse o desafio</span>
      </ButtonLink>
    </div>
  )
}

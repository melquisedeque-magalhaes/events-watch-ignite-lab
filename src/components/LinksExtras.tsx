import { ButtonFullLink } from './ButtonFullLink'

export function LinksExtras() {
  return (
    <div className="my-[80px] flex gap-4">
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
  )
}

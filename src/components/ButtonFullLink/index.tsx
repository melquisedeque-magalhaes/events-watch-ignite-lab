/* eslint-disable jsx-a11y/alt-text */
import { CaretRight, FileArrowDown, Image } from 'phosphor-react'

interface ButtonFullLinkProps {
  title: string
  description: string
  icon: 'File' | 'Image'
}

export function ButtonFullLink({
  title,
  description,
  icon,
}: ButtonFullLinkProps) {
  return (
    <a className="flex justify-between rounded overflow-hidden bg-gray-700 h-[134px] w-[504px] cursor-pointer">
      <div className="w-[86px] bg-green-700 flex items-center justify-center p-6">
        {icon === 'File' ? <FileArrowDown size={40} /> : <Image size={40} />}
      </div>

      <div className="p-6 bg-gray-700 flex flex-col justify-center leading-relaxed">
        <span className="font-bold text-2xl text-gray-100">{title}</span>
        <p className="text-sm text-gray-200">{description}</p>
      </div>

      <div className="flex items-center justify-center p-6 text-blue-500">
        <CaretRight size={24} />
      </div>
    </a>
  )
}

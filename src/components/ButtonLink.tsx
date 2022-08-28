import { ReactNode } from 'react'

interface ButtonLinkProps {
  variant?: 'Primary' | 'Secondary'
  children: ReactNode
}

export function ButtonLink({ variant = 'Primary', children }: ButtonLinkProps) {
  return (
    <a
      href="#"
      className={`flex gap-2 justify-center items-center px-4 py-[14px] font-bold text-sm text-gray-100 uppercase rounded ${
        variant === 'Primary' && 'bg-green-500'
      }  ${
        variant === 'Primary' ? 'hover:bg-green-700' : 'hover:bg-blue-500'
      } ${
        variant === 'Secondary' &&
        'border border-blue-500  text-blue-500 hover:text-gray-900'
      } transition-colors`}
    >
      {children}
    </a>
  )
}

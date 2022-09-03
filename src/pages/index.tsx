/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'

import { GithubLogo } from 'phosphor-react'

import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="flex justify-between max-w-[1100px] w-full mx-auto pt-20">
        <div className="max-w-[624px]">
          <Logo />

          <h1 className="mt-8 text-gray-100 text-[40px] leading-tight">
            Construa uma{' '}
            <span className="text-blue-500 font-bold">aplicação completa</span>,
            do zero, com{' '}
            <span className="text-blue-500 font-bold">React JS - Melqui</span>
          </h1>

          <p className="mt-6 text-base text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <form className="bg-gray-700 p-8 rounded flex flex-col">
          <strong className="text-2xl text-gray-100">
            Inscreva-se gratuitamente
          </strong>

          <button
            type="button"
            onClick={() => signIn()}
            className="font-bold uppercase text-sm mt-6 bg-green-500 rounded py-4 flex items-center justify-center hover:bg-green-700 transition-colors gap-2"
          >
            <GithubLogo size={24} />
            <span>conectar com Github</span>
          </button>
        </form>
      </div>

      <img src="/code-background.png" alt="Code Reactjs" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/event',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

import { render, fireEvent } from '@testing-library/react'

import Home from '..'

describe('[Pages] - Home', () => {
  const signInMocked = jest.fn()
  const getSessionMocked = jest.fn()

  jest.mock('next-auth/react', () => ({
    signIn: signInMocked,
    getSession: getSessionMocked,
  }))

  it('Should be able render correctly', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })

  it('Should be able make login whe user press button "Conectar com Github"', () => {
    const { getByRole } = render(<Home />)

    const buttonSignInGithub = getByRole('button', {
      name: /conectar com github/i,
    })

    fireEvent.click(buttonSignInGithub)

    expect(signInMocked).toHaveBeenCalled()
  })
})

import { render } from '@testing-library/react'
import { Header } from '..'

describe('Component [Header]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })
})

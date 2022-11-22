import { render } from '@testing-library/react'
import { ButtonLink } from '..'

describe('Component [ButtonLink]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(
      <ButtonLink variant="Primary">
        <h1>test</h1>
      </ButtonLink>,
    )

    expect(container).toBeInTheDocument()
  })
})

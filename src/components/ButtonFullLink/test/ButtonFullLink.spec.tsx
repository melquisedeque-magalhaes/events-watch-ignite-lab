import { render } from '@testing-library/react'
import { ButtonFullLink } from '..'

describe('Component [ButtonFullLink]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(
      <ButtonFullLink title="test" description="test" icon="File" />,
    )

    expect(container).toBeInTheDocument()
  })
})

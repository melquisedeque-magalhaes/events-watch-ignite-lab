import { render } from '@testing-library/react'
import { Lesson } from '..'

describe('Component [Lesson]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(
      <Lesson
        availableAt={new Date()}
        isActive={true}
        slug="curso-test"
        title="curso"
        type="live"
      />,
    )

    expect(container).toBeInTheDocument()
  })
})

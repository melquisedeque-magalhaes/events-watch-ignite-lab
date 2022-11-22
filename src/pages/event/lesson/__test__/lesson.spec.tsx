import { render } from '@testing-library/react'
import EventLesson from '../'

describe('[Pages] - Lesson', () => {
  it('Should be able render correctly', () => {
    const { container } = render(<EventLesson />)

    expect(container).toBeInTheDocument()
  })
})

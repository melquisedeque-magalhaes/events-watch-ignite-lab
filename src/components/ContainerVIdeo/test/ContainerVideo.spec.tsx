import { render } from '@testing-library/react'
import { ContainerVideo } from '../'

describe('Component [Container Video]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(<ContainerVideo videoId="124312345" />)

    expect(container).toBeInTheDocument()
  })
})

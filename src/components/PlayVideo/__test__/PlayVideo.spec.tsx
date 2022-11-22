import { render } from '@testing-library/react'

import PlayVideo from '..'

jest.mock('@vime/react', () => ({
  DefaultUi: () => <div />,
  Player: ({ children }) => <div>{children}</div>,
  Youtube: () => <div />,
}))
describe('Component [PlayVideo]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(<PlayVideo youtubeVideoId="12124" />)

    expect(container).toBeInTheDocument()
  })
})

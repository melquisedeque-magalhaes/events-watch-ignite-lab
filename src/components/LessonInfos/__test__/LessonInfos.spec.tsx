import { render } from '@testing-library/react'
import { LessonInfos } from '..'

const teacherMock = {
  name: 'Gustavo',
  bio: 'professor de testes',
  avatarURL: 'avatar_url.com',
}
describe('Component [LessonInfos]', () => {
  it('Should be able render correctly', () => {
    const { container } = render(
      <LessonInfos
        title="aula de testes"
        description="aulas de teste automatizados"
        teacher={teacherMock}
      />,
    )

    expect(container).toBeInTheDocument()
  })
})

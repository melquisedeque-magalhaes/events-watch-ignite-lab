export interface LessonType {
  lesson: {
    title: string
    description: string
    id: string
    videoId: string
    teacher: {
      name: string
      bio: string
      avatarURL: string
    }
  }
}

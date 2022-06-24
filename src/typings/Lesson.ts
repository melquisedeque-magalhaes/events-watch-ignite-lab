export interface LessonTypes{
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
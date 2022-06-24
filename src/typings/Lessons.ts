export interface LessonsTypes {
  lessons: {
    id: string;
    title: string;
    slug: string;
    lessonType: 'live' | 'class'
    availableAt: string
  }[]
}
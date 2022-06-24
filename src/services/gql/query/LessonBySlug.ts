import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG = gql`
query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}, stage: PUBLISHED) {
    description
    id
    title
    videoId
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`
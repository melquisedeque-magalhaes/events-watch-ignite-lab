import { gql } from "@apollo/client";

export const LessonBySlugGql = gql`
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
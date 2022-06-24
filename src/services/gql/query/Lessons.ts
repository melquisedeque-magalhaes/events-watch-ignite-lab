import { gql } from "@apollo/client";

export const LESSON_QUERY_GQL = gql`
    query LESSON_QUERY_GQL {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        availableAt
        id
        lessonType
        slug
        title
      }
    }
`

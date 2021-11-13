import { request, gql } from "graphql-request";
import { Post } from "../types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getRecentPosts = async (): Promise<Post[]> => {
  const query = gql`
    query getPostDetails() {
        posts(
            orderBy: createdAt_ASC
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

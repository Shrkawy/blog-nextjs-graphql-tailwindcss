import { gql, request } from "graphql-request";
import { Post } from "../types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async (): Promise<Post[]> => {
  const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

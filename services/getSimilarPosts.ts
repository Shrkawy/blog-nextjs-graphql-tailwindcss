import { request, gql } from "graphql-request";
import { Category, Post } from "../types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getSimilarPosts = async (
  slug: Post["slug"],
  categories: Category["slug"][]
): Promise<Post[]> => {
  const query = gql`
    query getPostDetails($slug: String, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
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

  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

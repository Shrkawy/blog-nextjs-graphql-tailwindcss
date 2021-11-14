import { request, gql } from "graphql-request";
import { Comment, Post } from "../types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getComments = async (slug: Post["slug"]): Promise<Comment[]> => {
  const query = gql`
    query getAllComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  const posts = result.comments;

  return posts;
};

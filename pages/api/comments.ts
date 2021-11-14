import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const token = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN;

export default async function sendComment(req, res) {
  const graphQLClint = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  let result;

  try {
    result = await graphQLClint.request(query, req.body);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ message: "something went wrong", success: false });
  }

  if (result) {
    return res.status(200).json({ message: "comment created", success: true });
  }

  return res
    .status(500)
    .json({ message: "something went wrong", success: false });
}

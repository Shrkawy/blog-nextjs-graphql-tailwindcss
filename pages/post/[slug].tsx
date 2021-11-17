import Head from "next/head";
import {
  PostWidget,
  Categories,
  PostDetail,
  Author,
  CommentForm,
  Comments,
} from "../../components/shared";
import { Post } from "../../types/Post";
import { getPost, getPosts } from "../../services";

interface PostDetailsProps {
  post: Post;
}

const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container px-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((c) => c.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((p) => {
    const slug = p.slug;
    return { params: { slug } };
  });

  return { paths, fallback: false };
}

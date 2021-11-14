import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard } from "../Home/components";
import { Loader, Categories } from "../../components/shared";
import { Post } from "../../types";

interface Props {
  posts: Post[];
}

const CategoryPost = ({ posts }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

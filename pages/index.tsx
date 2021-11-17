import Head from "next/head";
import {
  Categories,
  FeaturedPosts,
  PostCard,
  PostWidget,
} from "../components/shared";

import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <main className="container px-10 mx-auto mb-8">
      <Head>
        <title>Shark Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

import Head from "next/head";
import { Categories, PostCard, PostWidget } from "./components";

export default function Home({ posts }) {
  return (
    <main className="container px-10 mx-auto mb-8">
      <Head>
        <title>Shark Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
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

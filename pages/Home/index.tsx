import Head from "next/head";
import { Post } from "../../types";
import { Categories, PostCard, PostWidget } from "./components";

const posts: Post[] = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with TailwindCSS", excerpt: "Learn React with TailwindCSS" },
];

export default function Home() {
  return (
    <main className="container px-10 mx-auto mb-8">
      <Head>
        <title>Shark Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

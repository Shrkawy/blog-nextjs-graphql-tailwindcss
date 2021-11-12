import Head from "next/head";
import { Post } from "../types";

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


    </main>
  );
}

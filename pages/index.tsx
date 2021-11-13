import Home from "./Home";
import { getPosts } from "../services/index";

export default function App({ posts }) {
  return <Home posts={posts} />;
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

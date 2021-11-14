import Image from "next/image";
import parse from "html-react-parser";

import { PostAuthorDetails } from "../../../components/shared";
import { Post } from "../../../types";

import styles from "./PostDetail.module.css";

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <article className="pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
      <div className="relative mb-6 shadow-md h-72 overflow -hidden">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center w-full mb-8">
          <PostAuthorDetails
            authorName={post.author.name}
            createdAt={post.createdAt}
            photoUrl={post.author.photo.url}
          />
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <div className={styles.content}>{parse(post.content.html)}</div>
      </div>
    </article>
  );
};

export default PostDetail;

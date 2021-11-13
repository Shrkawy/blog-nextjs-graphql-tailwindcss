import { Post } from "../../../types/Post";
interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCard;

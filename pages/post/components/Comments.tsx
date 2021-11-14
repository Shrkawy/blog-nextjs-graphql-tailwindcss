import { Post } from "../../../types";

interface CommentsProps {
  slug: Post["slug"];
}

const Comments = ({ slug }: CommentsProps) => {
  return <div>Comments</div>;
};

export default Comments;

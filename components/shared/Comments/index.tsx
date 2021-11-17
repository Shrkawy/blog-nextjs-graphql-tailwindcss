import { useState, useEffect } from "react";
import { Comment as CommentType, Post } from "../../../types";
import { getComments } from "../../../services";
import Comment from "./Comment";

interface CommentsProps {
  slug: Post["slug"];
}

const Comments = ({ slug }: CommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
          <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
            {comments.length} Comments
          </h3>
          {comments.map((co) => (
            <Comment key={co.slug} comment={co} />
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;

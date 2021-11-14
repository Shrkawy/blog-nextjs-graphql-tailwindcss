import moment from "moment";
import parse from "html-react-parser";
import { Comment as CommentType } from "../../../../types";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  console.log(comment);
  return (
    <div key={comment.createdAt} className="pb-4 mb-4 border-b border-gray-100">
      <p className="mb-4">
        <span className="font-semibold">{comment.name}</span> On{" "}
        {moment(comment.createdAt).format("DD MMM, YYYY")}
      </p>
      <p className="w-full text-gray-600 whitespace-pre-line">
        {parse(comment.comment)}
      </p>
    </div>
  );
};

export default Comment;

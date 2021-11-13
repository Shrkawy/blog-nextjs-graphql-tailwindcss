import Image from "next/image";
import { Post } from "../../types";
import { Date } from "../Icons";
import moment from "moment";

interface Props {
  photoUrl: Post["author"]["photo"]["url"];
  authorName: Post["author"]["name"];
  createdAt: Post["createdAt"];
}

const PostAuthorDetails = ({ authorName, createdAt, photoUrl }: Props) => {
  return (
    <>
      <div className="relative flex items-center justify-start w-full mb-4 mr-8 lg:mb-0 lg:w-auto">
        <Image
          src={photoUrl}
          objectFit="cover"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="inline ml-2 text-lg text-gray-700 align-middle">
          {authorName}
        </p>
      </div>
      <div className="flex items-center justify-center h-full gap-2 font-medium text-gray-700">
        <Date />
        <span>{moment(createdAt).format("DD MMM, YYYY")}</span>
      </div>
    </>
  );
};

export default PostAuthorDetails;

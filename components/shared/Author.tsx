import Image from "next/image";
import { Post } from "../../types";

interface AuthorProps {
  author: Post["author"];
}

const Author = ({ author }: AuthorProps) => {
  return (
    <div className="relative p-12 mt-20 mb-8 text-center bg-black rounded-lg bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          height={100}
          width={100}
          objectFit="cover"
          className="align-middle rounded-full"
        />
      </div>
      <h2 className="my-4 text-xl font-bold text-white">{author.name}</h2>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  );
};

export default Author;

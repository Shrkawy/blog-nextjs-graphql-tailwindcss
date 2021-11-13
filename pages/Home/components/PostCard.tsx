import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../types/Post";
import { Date } from "../../../components/Icons";
import moment from "moment";
interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div
      aria-label="post"
      className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8"
    >
      <div className="relative mb-6 overflow-hidden shadow-md pb-80">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute object-top w-full rounded-t-lg shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 text-3xl font-semibold text-center transition duration-700 cursor-pointer hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="items-center justify-center block w-full mb-8 text-center lg:flex">
        <div className="relative flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-auto">
          <Image
            src={post.author.photo.url}
            objectFit="cover"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="inline ml-2 text-lg text-gray-700 align-middle">
            {post.author.name}
          </p>
        </div>
        <div className="flex items-center justify-center h-full gap-2 font-medium text-gray-700">
          <Date />
          <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
        </div>
      </div>
      <div>
        <p className="px-4 mb-8 text-lg font-normal text-center text-gray-700 lg:px20">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer hover:-translate-y-1">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

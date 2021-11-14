import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { Post, Category } from "../../types";

import { getSimilarPosts } from "../../services/getSimilarPosts";
import { getRecentPosts } from "../../services/getRecentPosts";

interface Props {
  categories?: Category["slug"][];
  slug?: Post["slug"];
}

const PostWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="relative flex-none w-16">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              width={60}
              height={60}
              objectFit="cover"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-light text-gray-500">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

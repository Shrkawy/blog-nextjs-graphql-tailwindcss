import Link from "next/link";
import { Category } from "../../../types";
import { getCategories } from "../../../services/getCategories";
import { useQueryFetch } from "../../../hooks";

const Categories = () => {
  const categories = useQueryFetch<Category>(getCategories);

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
      <h1 className="pb-4 mb-8 text-lg font-semibold border-b">Categories</h1>
      {categories.map(({ name, slug }) => (
        <Link key={slug} href={`/category/${slug}`}>
          <span className="block pb-3 mb-3 cursor-pointer">{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

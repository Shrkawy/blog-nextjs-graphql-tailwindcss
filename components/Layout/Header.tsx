import Link from "next/link";
import { Category } from "../../types";

const categories: Category[] = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

const Header = () => {
  return (
    <header className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b border-blue-400">
        <div aria-label="logo" className="block md:float-left">
          <Link href="/">
            <span className="text-4xl font-bold text-white cursor-pointer">
              Shark
            </span>
          </Link>
        </div>
        <nav className="hidden md:float-left md:contents">
          {categories.map(({ name, slug }) => (
            <Link key={slug} href={`/category/${slug}`}>
              <span className="mt-2 ml-4 font-serif text-white align-middle cursor-pointer md:float-right">
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

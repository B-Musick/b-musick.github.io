import { Link } from "react-router-dom";
import FloaterCard from "./FloaterCard";

export default function BlogCard({ blog, classes }) {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <div className={`${classes} bg-gray-100 rounded-[20px] mb-4 shadow-2xl`}>
        <div className="w-[90vw] md:w-[700px] flex flex-col sm:flex-row">
          <img
            className="w-full sm:w-[30%] object-cover sm:rounded-l-[20px]"
            src={blog.image}
            alt={blog.title}
          />

          <div className="w-full sm:w-[70%] dark:bg-slate-500">
            <div className="text-2xl text-center p-2 bg-white dark:bg-slate-700">
              {blog.title}
            </div>

            <div className="flex justify-between px-2">
              {blog.categories && (
                <div className="flex flex-wrap m-2 text-xl">
                  {blog.categories.map((category: string, index: number) => (
                    <FloaterCard key={index} skill={category} />
                  ))}
                </div>
              )}

              <div className="italic text-xs m-2">{blog.date}</div>
            </div>
            <div className="p-4">{blog.overview}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

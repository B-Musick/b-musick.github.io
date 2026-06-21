import React from "react";
import { BlogCardProps } from "../lib/types";
import FloaterCard from "./FloaterCard";

const BlogCard: React.FC<BlogCardProps> = ({ metadata, classes }) => {
  const classNames = `${classes} bg-gray-100 rounded-[20px] mb-4 shadow-2xl`;
  const categories = Object.keys(metadata).includes("categories")
    ? metadata.categories.split(",")
    : "";

  return (
    <div className={classNames}>
      <div className="w-[90vw] md:w-[700px] flex flex-col sm:flex-row">
        <img
          className="w-full sm:w-[30%] object-cover sm:rounded-l-[20px]"
          src={metadata.image}
        />
        <div className="w-full sm:w-[70%] dark:bg-slate-500">
          <div className="text-2xl w-full bg-white dark:bg-slate-700 text-center p-2 text-base md:text-xl">
            {metadata.title}
          </div>
          <div className="flex flex-row justify-between px-2">
            {categories && (
              <div className="flex flex-wrap m-2 text-xl">
                {categories.map((category: string, index: number) => (
                  <FloaterCard key={index} skill={category} />
                ))}
              </div>
            )}
            <div className="italic text-xs font-black m-2 text-right">
              {metadata.date}
            </div>
          </div>
          <div className="justify-self-start self-end font-black m-2 font-normal">
            {metadata.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import { Link } from "react-router-dom";
import FloaterCard from "./FloaterCard";

type ProjectCardProps = {
  data: object;
};

export default function ProjectCard({ data }: ProjectCardProps) {
  const { slug, overview, imagePath, images, name, categories } = data;

  return (
    <Link to={`/projects/${slug}`}>
      <div className={`bg-gray-100 flex-1 rounded-[20px] mb-4 shadow-2xl`}>
        <div className="flex flex-col">
          <img
            className="w-full object-cover sm:rounded-t-[20px] h-[300px]"
            src={imagePath + images[0]}
            height={"300px"}
          />
          <div className="w-full dark:bg-slate-500">
            <div className="text-2xl w-full bg-white dark:bg-slate-700 text-center p-2 text-base md:text-xl">
              {name}
            </div>
            <div>
              {categories && (
                <div className="flex flex-wrap m-2 text-xl">
                  {categories.map((category: string, index: number) => (
                    <FloaterCard key={index} skill={category} />
                  ))}
                </div>
              )}
            </div>
            <div className="p-4">{overview}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

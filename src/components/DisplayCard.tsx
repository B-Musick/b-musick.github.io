import { Link } from "react-router-dom";
import FloaterCard from "./FloaterCard";
import { DisplayCardOrientation } from "../lib/enums";

type DisplayCardObject = {
  slug: string;
  image: string;
  title: string;
  categories: Array<string>;
  overview: string;
};
interface DisplayCardProps {
  item: DisplayCardObject;
  classes: string;
  baseUrl: string;
  orientation: DisplayCardOrientation;
  isResponsive: boolean;
}
export default function DisplayCard({
  item,
  classes,
  baseUrl,
  orientation,
  isResponsive,
}: DisplayCardProps) {
  return (
    <Link to={`/${baseUrl}/${item.slug}`}>
      <div className={`${classes} bg-gray-100 rounded-[20px] mb-4 shadow-2xl`}>
        <div
          className={`w-[90vw] md:w-[700px] flex ${orientation == DisplayCardOrientation.Vertical ? "flex-col" : ""} ${isResponsive && "flex-col sm:flex-row"}`}
        >
          <img
            className={`w-full ${isResponsive && "sm:w-[30%]"} h-[200px] object-cover sm:rounded-l-[20px]`}
            src={`/imgs/${baseUrl}/${item.slug}/${item.slug}.png`}
            alt={item.title}
          />

          <div
            className={`w-full ${isResponsive && "sm:w-[70%]"} dark:bg-slate-500`}
          >
            <div className="text-2xl text-center p-2 bg-white dark:bg-slate-700">
              {item.title}
            </div>

            <div className="flex justify-between px-2">
              {item.categories && (
                <div className="flex flex-wrap m-2 text-xl">
                  {item.categories.map((category: string, index: number) => (
                    <FloaterCard key={index} skill={category} />
                  ))}
                </div>
              )}

              {Object.keys(item).includes("date") && (
                <div className="italic text-xs m-2">{item.date}</div>
              )}
            </div>
            <div className="p-4">{item.overview}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

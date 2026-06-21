import React from "react";
import { ResumeCardProps } from "../lib/types";
import FloaterCard from "./FloaterCard";
import { TbWorld } from "react-icons/tb";

const ResumeCard: React.FC<ResumeCardProps> = ({ job, children, classes }) => {
  const {
    company,
    title,
    startMonth,
    endMonth,
    endYear,
    description,
    skills,
    link,
  } = job;

  const getDescription = () => {
    if (!description) return null;

    if (typeof description === "string") {
      return <p className="mt-2">{description}</p>;
    }

    if (Array.isArray(description)) {
      return (
        <ul className="list-disc pl-4">
          {description.map((item: string, index: number) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <div
      className={`flex flex-col hover:bg-white/5 p-4 rounded-md ${classes} text-slate-900 dark:text-white`}
    >
      <div className="flex pl-4 flex-wrap w-full">
        <div className="w-full text-lg flex justify-between">
          <h2>{company}</h2>

          <div className="col-span-1 flex pt-1">
            <span className="px-2">{startMonth}</span>
            <hr className="w-4 mt-4 border-slate-500 dark:border-white" />
            <span className="pl-2">{endMonth}</span>
            <span className="px-1">{endYear}</span>
          </div>
        </div>
        <h3 className="w-full">{title}</h3>

        {getDescription()}

        <div className="mt-2 flex flex-wrap justify-between w-full">
          <span className="flex flex-wrap w-full">
            {skills.map((skill: string, index: number) => (
              <FloaterCard key={index} skill={skill} />
            ))}{" "}
            {link && (
              <a className="flex grow justify-end" href={link}>
                <TbWorld className="ml-4 mt-1" size={40} />
              </a>
            )}
          </span>
        </div>
      </div>
      <div className="w-full">{children}</div>
      <hr className="w-full mt-9" />
    </div>
  );
};

export default ResumeCard;

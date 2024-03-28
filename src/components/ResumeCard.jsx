import FloaterCard from "./FloaterCard";
import { TbWorld } from "react-icons/tb";

function ResumeCard({job, children, classes}){
    const {company, title, startMonth, startYear, endMonth, endYear, description, skills, link} = job;
    console.log(title);
    return (
        <div className={`flex flex-col text-white hover:bg-white/5 p-4 rounded-md ${classes}`}>
            <div className="flex pl-4 flex-wrap w-full">
                <div className="w-full text-lg flex justify-between">{company} 
                    <div className="col-span-1 flex text-xs pt-1">
                        <span className="px-2">{startMonth}</span><hr className="w-4 mt-2" /><span className="pl-2">{endMonth}</span><span className="px-1">{endYear}</span>
                    </div>
                </div>
                <div className="text-sm w-full">{title}</div>
                <p className="text-sm mt-2">{description}</p>
                <div className="mt-2 flex flex-wrap justify-between w-full">
                    <span className="flex flex-wrap w-full">{skills.map(skill => <FloaterCard skill={skill}/> )} {link && <a className="flex grow justify-end" href={link}><TbWorld className="ml-4 mt-1" /></a>}</span>
                </div>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default ResumeCard;
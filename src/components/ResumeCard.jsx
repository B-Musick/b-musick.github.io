import FloaterCard from "./FloaterCard";

function ResumeCard({job}){
    const {company, title, startMonth, startYear, endMonth, endYear, description, skills} = job;
    console.log(title);
    return (
        <div className="grid grid grid-cols-4 w-full text-white hover:bg-white/5 p-4 rounded-md">
            <div className="col-span-1 flex text-xs pt-1">
                <span className="px-2">{startMonth}</span><hr className="w-4 mt-2" /><span className="pl-2">{endMonth}</span><span className="px-1">{endYear}</span>
            </div>
            <div className="w-full col-span-3 pl-4">
                <div className="text-lg">{company}</div>
                <div className="text-sm w-full">{title}</div>
                <p className="text-sm mt-2">{description}</p>
                <div className="mt-2 flex">
                    {skills.map(skill => <FloaterCard skill={skill}/> )}
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;
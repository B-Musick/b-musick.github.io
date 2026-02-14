import ResumeCard from "../components/ResumeCard";
import jobs from "../data/jobs.json";

function ResumePage() {
  return (
    <div className="py-36 w-full font-roboto text-teal-200 flex justify-center flex-col items-center absolute bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900">
      <h1>Brendan Musick's Resume</h1>

      <div className="flex flex-col items-center max-w-[1200px]">
        {jobs.map((job, index) => (
          <ResumeCard key={index} job={job} classes="sm:w-[90%] w-[100%]">
            {job.children &&
              job.children.map((child, childIndex) => (
                <ResumeCard key={childIndex} job={child} />
              ))}
          </ResumeCard>
        ))}
      </div>
    </div>
  );
}

export default ResumePage;

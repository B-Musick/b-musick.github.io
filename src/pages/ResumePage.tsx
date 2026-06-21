import Heading from "../components/Heading";
import ResumeCard from "../components/ResumeCard";
import jobs from "../data/jobs.json";

function ResumePage() {
  return (
    <div className="min-h-screen py-36 w-full flex justify-center flex-col items-center">
      <Heading level={1} text="Brendan Musick's Resume" />

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

import ProjectCard from "../components/ProjectCard";
import { projects, work, current } from "/src/data/projects.json";

export default function ProjectPage() {
  const items = projects.map((project: any, index: number) => {
    console.log(project);
    return <ProjectCard data={project} key={index} />;
  });

  return (
    <main>
      <div className="min-h-screen py-36 w-[95%] flex justify-center items-center flex-wrap gap-5">
        {items}
      </div>
    </main>
  );
}

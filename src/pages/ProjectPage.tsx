import { projects } from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function BlogPage() {
  return (
    <main className="w-full h-full">
      <div className="h-screen flex flex-col pt-28 overflow-scroll items-center w-full">
        {projects.map((project) => (
          <ProjectCard key={project.slug} data={project} />
        ))}
      </div>
    </main>
  );
}

export default BlogPage;

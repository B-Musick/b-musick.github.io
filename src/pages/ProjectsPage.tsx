import { projects } from "../data/projects.json";
import DisplayCard from "../components/DisplayCard";
import { DisplayCardOrientation } from "../lib/enums";

function BlogPage() {
  return (
    <main className="w-full h-full">
      <div className="h-screen flex flex-col pt-28 overflow-scroll items-center w-full">
        {projects.map((project) => (
          <DisplayCard
            key={project.slug}
            item={project}
            baseUrl="projects"
            orientation={DisplayCardOrientation.Vertical}
            isResponsive={false}
          />
        ))}
      </div>
    </main>
  );
}

export default BlogPage;

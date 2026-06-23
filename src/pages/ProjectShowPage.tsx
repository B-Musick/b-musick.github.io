import { useParams } from "react-router-dom";
import MarkdownViewer from "../components/MarkdownViewer";
import { projects } from "../data/projects.json";

export default function BlogShowPage() {
  const { projectId } = useParams();
  const url = projectId ? `/projects/${projectId}.md` : "";

  return (
    <div className="flex justify-center">
      <div className="max-w-[900px] w-full">
        <MarkdownViewer
          markdownUrl={url}
          slug={projectId}
          files={projects}
          baseUrl={"projects"}
        />
      </div>
    </div>
  );
}

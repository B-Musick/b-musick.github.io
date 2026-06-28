import { useMarkdown } from "../hooks/useMarkdown";
import ErrorPage from "../pages/404";
import MarkdownDisplay from "../components/MarkdownDisplay.tsx";

export default function ComputerSciencePage() {
  const { postText, loading, error } = useMarkdown(
    "/pages/computer-science.md",
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorPage url={`/computer-science`} />;
  return (
    <div>
      <MarkdownDisplay postText={postText} />
    </div>
  );
}

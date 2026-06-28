import ErrorPage from "../pages/404";
import { useMarkdown } from "../hooks/useMarkdown.ts";
import MardownDisplay from "./MarkdownDisplay.tsx";

export default function MarkdownViewer({ slug, files, baseUrl }) {
  const fileMeta = files?.find((f) => f.slug === slug);

  if (!fileMeta) {
    return <ErrorPage url={`/${baseUrl}/${slug}`} />;
  }

  const requestUrl = `/${baseUrl}/${fileMeta.filename}`;

  const { postText, loading, error } = useMarkdown(requestUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorPage url={`/${baseUrl}/${slug}`} />;

  return (
    <div className="absolute left-0 top-0 h-fit w-full flex justify-center bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900">
      <div
        id="card-content"
        className="max-w-[1200px] w-full text-[8px] sm:text-sm dark:text-white flex flex-col justify-start sm:m-8 sm:mt-36 dark:bg-white/20 bg-white/85 p-8 md:p-16"
      >
        <img
          src={`/imgs/${baseUrl}/${slug}/${slug}.png`}
          alt="test"
          className="w-full h-96 bg-black"
          style={{ borderRadius: "0 0 100% 100%/40px" }}
        />
        <MardownDisplay postText={postText} />
      </div>
    </div>
  );
}

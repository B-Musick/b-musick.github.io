import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Code from "../components/blog/Code.tsx";
import Header from "../components/blog/Header.tsx";
import Paragraph from "../components/blog/Paragraph.tsx";
import SubSubHeader from "../components/blog/SubSubHeader.tsx";
import SubHeader from "../components/blog/SubHeader.tsx";
import UnorderedList from "../components/blog/UnorderedList.tsx";
import Blockquote from "../components/blog/Blockquote.tsx";
import ErrorPage from "../pages/404";
import matter from "gray-matter";

export default function MarkdownViewer({ slug, files, baseUrl }) {
  const [postText, setPostText] = useState("");
  const [metadata, setMetadata] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fileMeta = files?.find((f) => f.slug === slug);
  console.log(files[0] + " meta");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        setError(false);

        if (!fileMeta) {
          setError(true);
          setLoading(false);
          return;
        }
        const file = new Request(`/${baseUrl}/${fileMeta.filename}`);

        fetch(file)
          .then((data) => data.text())
          .then((text) => {
            setPostText(text);
          });
        // const response = await fetch();

        // if (!response.ok) {
        //   setError(true);
        //   return;
        // }

        // const text = await response.text();
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchMarkdown();
    }
  }, [slug, fileMeta]);

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
        <Markdown
          className="w-full p-5"
          options={{
            wrapper: "article",
            overrides: {
              h1: { component: Header },
              h2: { component: SubHeader },
              h3: { component: SubSubHeader },
              p: { component: Paragraph },
              blockquote: { component: Blockquote },
              code: { component: Code },
              // ul: { component: UnorderedList, props: { blogId: params.blogId } },
            },
          }}
        >
          {postText}
        </Markdown>
      </div>
    </div>
  );
}

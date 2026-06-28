import Markdown from "markdown-to-jsx";
import Header from "./markdown/Header";
import SubHeader from "./markdown/SubHeader";
import SubSubHeader from "./markdown/SubSubHeader";
import Paragraph from "./markdown/Paragraph";
import Blockquote from "./markdown/Blockquote";
import Code from "./markdown/Code";
import WrappedImageText from "./markdown/WrappedImageText";

interface MarkdownDisplayProps {
  postText: string;
}

export default function MardownDisplay({ postText }: MarkdownDisplayProps) {
  return (
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
          WrappedImageText: {
            component: WrappedImageText,
          },
          // ul: { component: UnorderedList, props: { blogId: params.blogId } },
        },
      }}
    >
      {postText}
    </Markdown>
  );
}

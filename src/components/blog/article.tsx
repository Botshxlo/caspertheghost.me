import { Post } from "types/post";
import { BlogFooter } from "./blog-footer";
import { BlogHeader } from "./blog-header";
import { Markdown } from "./markdown/markdown";

interface Props {
  article: Post;
}

export function Article({ article }: Props) {
  return (
    <article className="pb-5">
      <BlogHeader post={article} />

      <Markdown content={article.content} />

      <BlogFooter post={article} />
    </article>
  );
}

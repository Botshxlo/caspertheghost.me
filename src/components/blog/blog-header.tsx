import { useSSRSafeId } from "@react-aria/ssr";
import format from "date-fns/format";
import { useViews } from "lib/hooks/use-views";
import { Clock, Eye } from "react-bootstrap-icons";
import { Post } from "types/post";

interface Props {
  post: Post;
}

export function BlogHeader({ post }: Props) {
  const views = useViews();
  const publishDateFull = format(new Date(post.createdAt), "LLLL dd, yyyy");
  const viewsText = views === 1 ? "view" : "views";

  const viewsId = useSSRSafeId();
  const readTimeId = useSSRSafeId();

  return (
    <header className="pb-2 pt-5 border-b border-secondary">
      <h1 className="mb-5 text-3xl font-bold md:text-4xl">{post.title}</h1>

      <div style={{ scrollbarWidth: "thin" }} className="flex gap-6 overflow-x-auto">
        <p className="font-medium min-w-fit">{publishDateFull}</p>
        {post.readingTime ? (
          <p className="flex items-center gap-2 min-w-fit">
            <Clock aria-labelledby={readTimeId} className="text-gray-400" />{" "}
            <span id={readTimeId}>{post.readingTime}</span>
          </p>
        ) : null}

        <p className="flex items-center gap-2 min-w-fit">
          <Eye aria-labelledby={viewsId} className="text-gray-400" />{" "}
          {views ? Intl.NumberFormat().format(views) : "—"} <span id={viewsId}>{viewsText}</span>
        </p>
      </div>
    </header>
  );
}
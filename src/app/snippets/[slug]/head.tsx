import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCodeSnippet } from "lib/mdx/get-code-snippet";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function CodeSnippetsHead({ params }: { params: { slug: string } }) {
  const snippet = getCodeSnippet(params.slug);

  if (!snippet) {
    return null;
  }

  // todo: make this a function
  const pageTitle = `${snippet.title} - Casper Iversen`;
  const pageDescription = snippet.intro;
  const keywords = [
    ...DEFAULT_KEYWORDS,
    "code snippets",
    "snippets casper iversen",
    ...(snippet.keywords ?? []),
  ];

  return (
    <NextSeo
      useAppDir
      openGraph={{
        article: {
          publishedTime: snippet.createdAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/snippets/${getArticleSlug(snippet)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={[{ name: "keywords", content: keywords.join(", ") }]}
    />
  );
}
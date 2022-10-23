import { Layout } from "components/layout";
import { Link } from "data/links";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

interface Props {
  links: Link[];
}

export default function Links({ links }: Props) {
  return (
    <Layout>
      <NextSeo
        openGraph={{ title: "Links - Casper Iversen" }}
        canonical="https://caspertheghost.me/links"
        title="Links - Casper Iversen"
      />

      <h1 className="section-title">Links</h1>

      <p className="my-1.5 text-secondary-light">
        Click any of the links to head to the requested profile.
      </p>

      <ul className="mt-2" role="list">
        {links.map((link) => (
          <li key={link.href} role="listitem">
            <a
              title="This link will open in a new tab."
              target="_blank"
              rel="noreferrer noopener"
              className="block p-1.5 px-3 my-1.5 rounded-md border border-primary-dark text-secondary text-center shadow-sm hover:border-secondary transition-colors"
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { links } = await import("data/links");

  return {
    props: {
      links,
    },
  };
};

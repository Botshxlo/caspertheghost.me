import ronin from "ronin";
import NextLink from "next/link";
import { mergeSeo } from "~/lib/merge-seo";
import { Link } from "~/components/link";
import { ArrowRightShort } from "react-bootstrap-icons";
import { Projects } from "@ronin/casper";
import Image from "next/image";

export const revalidate = 600; // 10 minutes

async function fetchProjects() {
  const [projects] = await ronin<Projects>(({ get }) => {
    get.projects = {
      orderedBy: { ascending: ["featuredPosition"] },
      limitedTo: 1000,
    };
  });

  return {
    projects,
  };
}

const pageDescription = "A list of my projects that I'm most proud of.";

export const metadata = mergeSeo({
  title: "Projects",
  description: pageDescription,
  alternates: {
    canonical: "https://caspertheghost.me/projects",
  },
  openGraph: {
    title: "Projects",
    description: pageDescription,
  },
  twitter: {
    title: "Projects",
    description: pageDescription,
  },
  keywords: ["projects casper iversen", "caspertheghost projects", "react hooks"],
});

export default async function ProjectsPage() {
  const { projects } = await fetchProjects();

  const projectsWithSlugs = projects.filter((project) => project.slug);
  const projectsWithoutSlug = projects.filter((project) => !project.slug);

  return (
    <main className="mt-16 mx-auto max-w-6xl pb-6 px-5 md:px-0">
      <h1 className="text-4xl font-bold capitalize md:text-5xl font-title">
        Projects<span className="text-accent">.</span>
      </h1>

      <p className="mt-3 font-normal text-secondary-light">
        {pageDescription} All my projects are{" "}
        <NextLink className="underline" href="https://github.com/dev-caspertheghost">
          available on GitHub
        </NextLink>
        .
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {projectsWithSlugs.map((project) => {
          const projectURL = project.slug
            ? `/project/${project.slug}`
            : project.projectURL || project.addonURL || project.codeURL;

          return (
            <li
              className="p-4 rounded-lg border-2 bg-white/10 border-accent group"
              key={project.id}
            >
              <a href={projectURL} rel="noreferrer" target="_blank">
                <figure className="mb-5">
                  <Image
                    width={500}
                    height={350}
                    alt={project.title}
                    draggable={false}
                    className="rounded shadow-md w-full md:h-80 object-cover"
                    src={project.coverImage.src}
                    placeholder="blur"
                    blurDataURL={project.coverImage.placeholder.base64}
                  />
                </figure>

                <header className="flex items-baseline justify-between mb-6">
                  <h3 className="font-semibold font-poppins text-xl md:text-2xl transition-colors border-accent/10 group-hover:border-b-accent border-b-2 max-w-fit">
                    {project.title}
                  </h3>

                  <Link
                    size="square"
                    className="scale-75 group-hover:scale-100 group-hover:-rotate-45 group-hover:border-accent"
                    intent="secondary"
                    href={projectURL}
                  >
                    <ArrowRightShort width={25} height={25} />
                  </Link>
                </header>

                <p className="text-base md:text-xl text-gray-light max-w-xl font-inter font-normal">
                  {project.description}
                </p>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="mt-10 flex flex-col gap-5">
        {projectsWithoutSlug.map((blogPost) => {
          const projectURL = blogPost.slug
            ? `/project/${blogPost.slug}`
            : blogPost.projectURL || blogPost.addonURL || blogPost.codeURL;

          return (
            <li key={blogPost.id} className="flex justify-between group">
              <Link size="none" className="w-full" intent="none" href={projectURL}>
                <h3 className="font-semibold font-poppins text-xl md:text-2xl transition-colors border-accent/10 group-hover:border-b-accent border-b-2 max-w-fit">
                  {blogPost.title}
                </h3>

                <p className="mt-1 md:mt-2 text-base md:text-xl text-gray-light max-w-xl font-inter font-normal">
                  {blogPost.description}
                </p>
              </Link>

              <Link
                size="square"
                className="group-hover:scale-125 group-hover:-rotate-45 group-hover:border-accent"
                intent="secondary"
                href={projectURL}
              >
                <ArrowRightShort width={25} height={25} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

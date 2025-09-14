import React from "react";
import { GitHubIcon, LinkIcon } from "./svgs/Icons";

type Project = {
  title: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  githubLink?: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "Tetrite",
    role: "Game Design",
    description:
      "A tile-matching game disguised as a Tetris clone. Currently in development.",
    imageSrc: "/images/tetrio.png",
    imageAlt: "Tetrite gameplay",
    link: "https://solmaris.github.io/tetrio/",
    techStack: ["Godot", "GDScript"],
  },
  {
    title: "BLOP",
    role: "Game Design",
    description: "A game where you stack tetrominoes. Built for Ludum Dare 49.",
    imageSrc: "/images/blop.png",
    imageAlt: "BLOP gameplay",
    link: "https://amberlightgames.itch.io/blop",
    techStack: ["Unity", "C#"],
  },
  {
    title: "andrew is bored",
    role: "Game Design/Art",
    description:
      "A puzzle platformer where you move around by dashing through blocks of light and dark.",
    imageSrc: "/images/andrew.png",
    imageAlt: "Andrew Is Bored gameplay",
    link: "https://amberlightgames.itch.io/andrew-is-bored",
    techStack: ["Unity", "C#"],
  },
  {
    title: "Portfolio V1",
    role: "Web Design",
    description:
      "My first portfolio site. Fully responsive and designed from scratch with the holy trinity.",
    imageSrc: "/images/site.png",
    imageAlt: "this website",
    link: "https://stvnchng.github.io/portfolio-v1/",
    githubLink: "https://github.com/stvnchng/portfolio-v1",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 p-6 bg-gray-100 dark:bg-zinc-600/50 rounded-xl shadow-lg max-w-3xl mx-auto transition duration-300 md:hover:scale-105">
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="w-full h-auto object-cover rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col justify-between">
      <div>
        <span className="text-base font-medium text-gray-400">
          {project.role}
        </span>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-gray-300 dark:bg-teal-800 text-gray-700 dark:text-teal-50 px-4 py-1 rounded-full border-2 border-teal-500 "
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-teal-600 hover:text-teal-800 transition duration-300"
          aria-label={`View project: ${project.title}`}
        >
          <LinkIcon />
        </a>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-teal-600 hover:text-teal-800 transition duration-300"
            aria-label={`View GitHub repo: ${project.title}`}
          >
            <GitHubIcon size="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 md:px-20 z-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light uppercase">Projects</h1>
      </div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
}

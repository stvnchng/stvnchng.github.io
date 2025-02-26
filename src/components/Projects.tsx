"use client";

import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Tetrio",
    role: "Game Designer",
    description:
      "Tetrio is a tile-matching game disguised as a Tetris clone. It's still in development, but the main mechanics are there. I'm planning to add a more comprehensive tutorial and juice elements to make the matching more satisfying.",
    imageSrc: "/images/tetrio.png",
    imageAlt: "TETRIO gameplay",
    link: "https://solmaris.github.io/tetrio/",
  },
  {
    title: "BLOP",
    role: "Game and UI Designer",
    description:
      "BLOP is a physics-based strategy game where you build the highest block tower within the time limit. This was my first game jam project (Ludum Dare 49) and the theme was 'unstable'.",
    imageSrc: "/images/blop.png",
    imageAlt: "BLOP gameplay",
    link: "https://amberlightgames.itch.io/blop",
  },
  {
    title: "andrew is bored",
    role: "Game Designer and Artist",
    description:
      "andrew is bored is a platformer that I built with some friends. It has both puzzles and platforming built into it - you control a character who moves around by dashing through blocks of light and dark.",
    imageSrc: "/images/andrew.png",
    imageAlt: "Andrew Is Bored gameplay",
    link: "https://amberlightgames.itch.io/andrew-is-bored",
  },
  {
    title: "Portfolio Site",
    role: "Web Designer",
    description:
      "This site was designed from scratch using the holy trinity and is fully responsive. I've probably spent too much time on this, but I've learned a lot about CSS by using this as my playground.",
    imageSrc: "/images/site.png",
    imageAlt: "this website",
    link: "#",
    githubLink: "https://github.com/stvnchng/personal_site",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container mx-auto py-16 px-4">
        <div
          className="heading text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Projects
          </h1>
        </div>
        {projects.map((project, index) => (
          <div
            className="work-item grid md:grid-cols-2 gap-8 my-12"
            key={index}
          >
            <div
              className="work-img"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className="w-full h-auto object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div
              className="work-desc"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="title mb-4">
                <h6 className="text-sm font-semibold text-gray-500">
                  {project.role}
                </h6>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                View Project
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta ml-4 inline-block bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

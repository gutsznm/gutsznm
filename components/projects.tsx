"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Cloud-Native Backend API",
    description: "A scalable RESTful API built with Node.js and Express, deployed on Google Cloud Platform using Cloud Run and Cloud SQL.",
    tags: ["Node.js", "Express", "GCP", "Docker", "PostgreSQL"],
    github: "https://github.com/gutsznm",
  },
  {
    title: "Serverless Image Processing Service",
    description: "An automated backend service that processes user-uploaded images using cloud functions and object storage buckets.",
    tags: ["JavaScript", "Google Cloud Functions", "Cloud Storage"],
    github: "https://github.com/gutsznm",
  },
  {
    title: "Portfolio Website",
    description: "A minimalist personal portfolio website built with Next.js, Tailwind CSS, and TypeScript, featuring smooth transitions and responsive design.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/gutsznm",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight">
            Projects
          </h2>
          <p className="text-xs text-muted-foreground">
            selected works & open source
          </p>
        </div>

        {/* Projects List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-5 border border-border/40 hover:border-border rounded-lg transition-all hover:bg-card/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors p-1"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground/80 font-light leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/20">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground/70 border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
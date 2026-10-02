"use client";

import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import {
  SiExpress,
  SiFlask,
  SiGooglecloud,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  accent: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      number: "01",
      title: "Gestura Backend API",
      description:
        "Backend service untuk aplikasi penerjemah bahasa isyarat dengan fokus pada API, deployment, dan integrasi cloud.",
      tags: ["Python", "Flask", "Google Cloud Run"],
      github: "https://github.com/gutsznm/gestura-backend",
      accent: "#62aef0",
      icon: <SiGooglecloud />,
      visual: (
        <div className="relative h-full min-h-57.5 overflow-hidden rounded-lg bg-[#213183] p-6 text-white">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sticker-sky/30" />
          <div className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-sticker-purple/20" />

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium">
                API
              </span>
              <SiGooglecloud className="h-5 w-5 text-sticker-sky" />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                  🤟
                </span>
                <span className="text-white/50">→</span>
                <span className="rounded-lg bg-white/10 px-3 py-2 font-mono text-xs">
                  /predict
                </span>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-sticker-sky" />
              </div>
              <p className="mt-2 font-mono text-[10px] text-white/45">
                POST /api/v1/predict
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Dkost Mranggen API",
      description:
        "Backend service untuk platform booking kost yang menangani autentikasi, data pengguna, dan informasi properti.",
      tags: ["JavaScript", "Express JS", "MongoDB"],
      github: "https://github.com/gutsznm/dkos-mranggen-clabs/tree/backend",
      accent: "#2a9d99",
      icon: <SiExpress />,
      visual: (
        <div className="relative h-full min-h-57.5 overflow-hidden rounded-lg bg-[#eef7f6] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-sticker-teal">
              DKOST / DASHBOARD
            </span>
            <SiExpress className="h-5 w-5 text-[#31302e]" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {["Kost A", "Kost B", "Kost C"].map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-[#dce9e7] bg-white p-2.5"
              >
                <div className="mb-3 h-14 rounded-md bg-[#f6f5f4]" />
                <p className="truncate text-[10px] font-semibold text-[#31302e]">
                  {item}
                </p>
                <p className="mt-0.5 text-[9px] text-[#a39e98]">
                  {index + 1} kamar
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#dce9e7] bg-white px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-sticker-teal" />
            <span className="text-[10px] text-[#615d59]">
              API connected
            </span>
            <span className="ml-auto font-mono text-[9px] text-[#a39e98]">
              MongoDB
            </span>
          </div>
        </div>
      ),
    },
    // {
    //   number: "03",
    //   title: "Infoin Lalin Report App",
    //   description:
    //     "Full-stack application untuk menerima dan menampilkan laporan kondisi lalu lintas dari pengguna.",
    //   tags: ["Laravel", "Next JS", "PostgreSQL"],
    //   github: "https://github.com/gutsznm/infoin-lalin",
    //   accent: "#d6b6f6",
    //   icon: <SiNextdotjs />,
    //   visual: (
    //     <div className="relative h-full min-h-[230px] overflow-hidden rounded-lg bg-[#f5eefb] p-5">
    //       <div className="mb-4 flex items-center justify-between">
    //         <span className="text-[12px] font-semibold text-[#391c57]">
    //           INFOIN LALIN
    //         </span>
    //         <SiNextdotjs className="h-5 w-5 text-[#391c57]" />
    //       </div>

    //       <div className="relative h-[145px] overflow-hidden rounded-lg border border-[#e3d5ee] bg-white">
    //         <div className="absolute inset-0 opacity-30">
    //           <div className="absolute left-8 top-6 h-24 w-1 rounded-full bg-[#d6b6f6]" />
    //           <div className="absolute left-24 top-0 h-36 w-1 rounded-full bg-[#d6b6f6]" />
    //           <div className="absolute left-40 -top-4 h-40 w-1 rounded-full bg-[#d6b6f6]" />
    //           <div className="absolute right-12 top-0 h-40 w-1 rounded-full bg-[#d6b6f6]" />
    //         </div>

    //         {[
    //           "left-12 top-10",
    //           "left-28 top-20",
    //           "right-20 top-12",
    //           "right-10 bottom-8",
    //         ].map((position, index) => (
    //           <span
    //             key={index}
    //             className={`absolute ${position} flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#d6b6f6] shadow-sm`}
    //           >
    //             <span className="h-1.5 w-1.5 rounded-full bg-[#391c57]" />
    //           </span>
    //         ))}
    //       </div>

    //       <div className="mt-3 flex gap-2">
    //         <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#615d59]">
    //           Razia
    //         </span>
    //         <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#615d59]">
    //           Macet
    //         </span>
    //         <span className="rounded-full bg-white px-2 py-1 text-[9px] text-[#615d59]">
    //           Banjir
    //         </span>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  const getTechIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "python":
        return <SiPython />;
      case "flask":
        return <SiFlask />;
      case "google cloud run":
        return <SiGooglecloud />;
      case "javascript":
        return <span className="font-bold text-[10px]">JS</span>;
      case "express js":
        return <SiExpress />;
      case "mongodb":
        return <SiMongodb />;
      case "laravel":
        return <SiLaravel />;
      case "next js":
        return <SiNextdotjs />;
      case "postgresql":
        return <SiPostgresql />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="bg-white px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-270">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.125px] text-[#0075de]">
              Selected Projects
            </p>

            <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#000000] sm:text-[44px]">
              Things I&apos;ve built.
            </h2>

            <p className="mt-4 text-base leading-[1.6] text-[#615d59]">
              Beberapa proyek yang merepresentasikan pengalaman saya dalam
              backend development, full-stack application, dan cloud.
            </p>
          </div>

          <span className="shrink-0 self-start rounded-full bg-[#f6f5f4] px-3 py-1.5 text-[12px] font-semibold text-[#615d59] md:self-auto">
            3 Projects
          </span>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-[#f6f5f4]"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Visual */}
                <div className="p-4 sm:p-5 lg:p-6">
                  {project.visual}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between bg-white p-6 sm:p-8">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-[13px] font-medium text-[#a39e98]">
                        {project.number}
                      </span>

                      <div 
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: `${project.accent}25`,
                          color: project.accent,
                        }}
                      >
                        <span className="[&>svg]:h-4 [&>svg]:w-4 flex items-center justify-center">
                          {project.icon}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-[26px] font-bold leading-[1.23] tracking-[-0.625px] text-[#000000]">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-[15px] leading-[1.6] text-[#615d59]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#f6f5f4] px-2.5 py-1.5 text-[12px] font-medium text-[#615d59]"
                        >
                          <span className="text-[#615d59]">
                            {getTechIcon(tag)}
                          </span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#e6e6e6] pt-5">
                    <span className="text-[13px] text-[#a39e98]">
                      View source code
                    </span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#000000] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#31302e]"
                    >
                      <FiGithub className="h-4 w-4" />
                      GitHub
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import {
  SiGithubactions,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { FiArrowUpRight, FiCloud, FiCode, FiDatabase, FiGitBranch } from "react-icons/fi";

const groups = [
  {
    title: "Languages",
    description: "Bahasa yang digunakan untuk membangun aplikasi dan service.",
    icon: FiCode,
    items: [
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
    ],
  },
  {
    title: "Database",
    description: "Relational dan document database untuk kebutuhan aplikasi.",
    icon: FiDatabase,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    ],
  },
  {
    title: "Tools",
    description: "Tools yang digunakan dalam development workflow.",
    icon: FiGitBranch,
    items: [
      { name: "Git", icon: <SiGit />, color: "#f05032" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088ff" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f6f5f4] px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-270">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#0075de]">
            Keahlian
          </p>

          <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#000000] sm:text-[44px]">
            My technology stack.
          </h2>

          <p className="mt-4 text-base leading-[1.6] text-[#615d59]">
            Teknologi yang saya gunakan untuk membangun aplikasi, backend
            service, database, hingga deployment.
          </p>
        </div>

        {/* Cloud highlight */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-[#213183] p-6 text-white sm:p-8">
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-sticker-sky/20" />
          <div className="absolute -bottom-24 right-32 h-52 w-52 rounded-full bg-sticker-sky/10" />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <FiCloud className="h-5 w-5 text-sticker-sky" />
              </div>

              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.125px] text-white/50">
                Main Focus
              </p>

              <h3 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] sm:text-[32px]">
                Cloud & DevOps
              </h3>

              <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-white/70">
                Fokus pengembangan saya berada pada cloud computing,
                deployment, automation, dan infrastructure.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {[
                {
                  name: "Google Cloud",
                  icon: <SiGooglecloud />,
                  color: "#62aef0",
                },
                {
                  name: "GitHub Actions",
                  icon: <SiGithubactions />,
                  color: "#2088ff",
                },
                {
                  name: "Cloud Deployment",
                  icon: <FiCloud />,
                  color: "#d6b6f6",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-4"
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-[13px] font-medium text-white/85">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other groups */}
        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-xl border border-[#e6e6e6] bg-white p-6"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6f5f4] text-[#0075de]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <FiArrowUpRight className="h-4 w-4 text-[#a39e98]" />
                </div>

                <h3 className="text-[20px] font-semibold leading-[1.4] tracking-[-0.125px] text-[#000000]">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-[14px] leading-normal text-[#615d59]">
                  {group.description}
                </p>

                <div className="mt-6 border-t border-[#e6e6e6] pt-4">
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5"
                      >
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f6f5f4] text-sm [&>svg]:h-4 [&>svg]:w-4"
                          style={{ color: item.color }}
                        >
                          {item.icon}
                        </span>

                        <span className="text-[14px] font-medium text-[#31302e]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#e6e6e6] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] leading-[1.43] text-[#a39e98]">
            Stack berkembang seiring kebutuhan project.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0075de] hover:text-[#005bab]"
          >
            Lihat implementasi di projects
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
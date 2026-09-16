"use client";

import { 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql,
  SiMysql,
  SiMongodb, 
  SiGit,
  SiGithubactions,
  SiGooglecloud
} from "react-icons/si";

const techStack = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
];

export default function TechStack() {
  return (
    <section className="py-16 px-4 sm:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight">
            Tech Stack
          </h2>
          <p className="text-xs text-muted-foreground">
            tools & technologies i work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-border/40 rounded-lg text-xs text-muted-foreground hover:border-border hover:text-foreground transition-all hover:bg-card/20 group"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
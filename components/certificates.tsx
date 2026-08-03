"use client";

import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { Preview } from "@/components/ui/preview";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link: string;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    name: "Bangkit 2024 Batch 2 - Cloud Computing",
    issuer: "Bangkit Academy",
    date: "2024",
    link: "https://drive.google.com/file/d/1JmGCF-75KNVIzyi0U7yNQz_Bkr3p6rtA/view",
    credentialId: "C179B4KY1043",
  },
];

export default function Certificates() {
  return (
    <section className="py-16 px-4 sm:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight">
            Certificates
          </h2>
          <p className="text-xs text-muted-foreground">
            professional certifications & achievements
          </p>
        </div>

        <div className="space-y-3">
          {certificates.map((cert, index) => {
            const fileIdMatch = cert.link.match(/\/d\/([^/]+)\//);
            const fileId = fileIdMatch ? fileIdMatch[1] : null;

            return (
              <div
                key={index}
                className="block group p-4 border border-border/40 hover:border-border rounded-lg transition-all hover:bg-card/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <FaFilePdf className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-muted-foreground">
                      <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <span className="text-xs text-muted-foreground/50 font-mono whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                      <span className="text-xs text-muted-foreground/60">
                        {cert.issuer}
                      </span>
                      {cert.credentialId && (
                        <>
                          <span className="hidden sm:inline text-muted-foreground/20">•</span>
                          <span className="text-xs font-mono text-muted-foreground/40">
                            ID: {cert.credentialId}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {fileId ? (
                    <Preview 
                      fileId={fileId}
                      triggerText=""
                      trigger={
                        <div className="flex-shrink-0 cursor-pointer mt-1">
                          <FaExternalLinkAlt className="w-3 h-3 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors" />
                        </div>
                      }
                    />
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 mt-1"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
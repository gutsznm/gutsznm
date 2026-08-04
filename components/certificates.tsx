"use client";

import { useState } from "react";
import Image from "next/image";

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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [previewFileId, setPreviewFileId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const getThumbnailUrl = (fileId: string) => {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w200`;
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleCardClick = (fileId: string) => {
    setPreviewFileId(fileId);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewFileId(null);
  };

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
            const thumbnailUrl = fileId ? getThumbnailUrl(fileId) : null;
            const hasError = imageErrors[index] || false;

            return (
              <div
                key={index}
                onClick={() => fileId && handleCardClick(fileId)}
                className={`block group p-4 border border-border/40 hover:border-border rounded-lg transition-all hover:bg-card/20 ${
                  fileId ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-md overflow-hidden bg-muted/30 border border-border/30 relative">
                    {fileId && thumbnailUrl && !hasError ? (
                      <Image
                        src={thumbnailUrl}
                        alt={cert.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        onError={() => handleImageError(index)}
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    )}
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

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isPreviewOpen && previewFileId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClosePreview();
          }}
        >
          <div className="relative bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden w-full max-w-5xl h-[85vh] rounded-lg">
            
            <iframe
              src={`https://drive.google.com/file/d/${previewFileId}/preview`}
              className="w-full h-full"
              title="Certificate Preview"
              loading="lazy"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiMaximize2, FiMinimize2, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    date: "2025",
    link: "https://drive.google.com/file/d/1JmGCF-75KNVIzyi0U7yNQz_Bkr3p6rtA/view",
    credentialId: "C179B4KY1043",
  },
  {
    name: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1hPiHVXBXEQR5yS9zpuFNv0pTshIXWUoO/view",
    credentialId: "RVZK0NGRNZD5",
  },
  {
    name: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1oQ4MhMrvx7eVpmlH3ejJnNUy32niiT5w/view",
    credentialId: "GRX5W7JORZ0M",
  },
  {
    name: "Belajar Penerapan Machine Learning dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1FfthDr0eYTE03qH7QekgfSlGK7NT0teh/view",
    credentialId: "4EXG7R2WQPRL",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1l_tfQUI3wc-AzsJdDRnVNX9WpNKhtSox/view",
    credentialId: "2VX34L2JQZYQ",
  },
  {
    name: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1Cnbs5QmSykqA-4fT73aXvRknWpK47NKh/view",
    credentialId: "NVP74W02OPR0",
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1sMKBmO-qH2MyRXsP4pd0N-aBtOdZ-MRp/view",
    credentialId: "KEXLYM94YZG2",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1xAFCUkx2-XjV-SyzxmCclr4mK3BdwDTi/view",
    credentialId: "MRZMY64K3ZYQ",
  },
  {
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1BdolCwCRhTdivhXPtMhOvexpX_xuJjcN/view",
    credentialId: "QLZ9VDG4EX5D",
  },
  {
    name: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1Uq8mc9nt7_IxA7GZKjE5bEbdghDBz-Hq/view",
    credentialId: "07Z64Y5LWPQR",
  },
];

const ITEMS_PER_SLIDE = 4;

export default function Certificates() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [previewFileId, setPreviewFileId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = Math.ceil(certificates.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide timer
  useEffect(() => {
    if (isPaused || isPreviewOpen) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, isPreviewOpen, totalSlides]);

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  const getThumbnailUrl = (fileId: string) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=w400`;
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleCardClick = (fileId: string) => {
    setPreviewFileId(fileId);
    setIsPreviewOpen(true);
    setIsFullscreen(false);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewFileId(null);
    setIsFullscreen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Group certificates into slides of 4
  const slideGroups = Array.from({ length: totalSlides }, (_, i) =>
    certificates.slice(i * ITEMS_PER_SLIDE, (i + 1) * ITEMS_PER_SLIDE)
  );

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

        {/* Carousel Container */}
        <div
          className="relative group/carousel overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Slider */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slideGroups.map((group, slideIdx) => (
              <div
                key={slideIdx}
                className="w-full flex-shrink-0 space-y-3 px-1"
              >
                {group.map((cert, itemIdx) => {
                  const globalIndex = slideIdx * ITEMS_PER_SLIDE + itemIdx;
                  const fileIdMatch = cert.link.match(/\/d\/([^/]+)\//);
                  const fileId = fileIdMatch ? fileIdMatch[1] : null;
                  const thumbnailUrl = fileId ? getThumbnailUrl(fileId) : null;
                  const hasError = imageErrors[globalIndex] || false;

                  return (
                    <div
                      key={globalIndex}
                      onClick={() => fileId && handleCardClick(fileId)}
                      className={`block group p-4 border border-border/40 hover:border-border rounded-lg transition-all hover:bg-card/20 ${
                        fileId ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-32 h-20 sm:w-44 sm:h-28 rounded-md overflow-hidden bg-muted/30 border border-border/30 relative">
                          {fileId && thumbnailUrl && !hasError ? (
                            <Image
                              src={thumbnailUrl}
                              alt={cert.name}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                              onError={() => handleImageError(globalIndex)}
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
                                <span className="hidden sm:inline text-muted-foreground/20">
                                  •
                                </span>
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
            ))}
          </div>
        </div>

        {/* Carousel Navigation & Dots Control Bar */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-border hover:bg-card/40 transition-all"
            aria-label="Previous certificates"
          >
            <FiChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {slideGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-4 bg-foreground/80"
                    : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-border hover:bg-card/40 transition-all"
            aria-label="Next certificates"
          >
            <FiChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Certificate Lightbox Preview Modal */}
      {isPreviewOpen && previewFileId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClosePreview();
          }}
        >
          <div
            className={`
              relative bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden
              ${
                isFullscreen
                  ? "w-screen h-screen rounded-none"
                  : `w-full ${
                      isMobile ? "max-w-full h-[95vh]" : "max-w-5xl h-[85vh]"
                    }`
              }
              transition-all duration-300 ease-out
              rounded-lg sm:rounded-none
            `}
          >
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 sm:p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? (
                  <FiMinimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <FiMaximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                )}
              </button>

              <button
                onClick={handleClosePreview}
                className="p-1.5 sm:p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Close"
              >
                <FiX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>

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
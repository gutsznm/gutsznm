"use client";

import { useState } from "react";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { SiGooglecloud } from "react-icons/si";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: "Cloud Computing",
    issuer: "Bangkit Academy",
    date: "Jan 2025",
    credentialId: "Bangkit 2024",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "Google Cloud",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "Cloud Computing Foundations",
    link: "#",
    category: "Cloud",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS Academy",
    link: "#",
    category: "Cloud",
  },
  {
    title: "AWS Academy Cloud Developing",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS Academy",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Back-End Development",
    issuer: "Dicoding",
    date: "2024",
    credentialId: "Dicoding Indonesia",
    link: "#",
    category: "Back-End & Web",
  },
  {
    title: "Web Development",
    issuer: "Dicoding",
    date: "2024",
    credentialId: "Dicoding Indonesia",
    link: "#",
    category: "Back-End & Web",
  },
  {
    title: "Machine Learning",
    issuer: "Dicoding",
    date: "2024",
    credentialId: "Dicoding Indonesia",
    link: "#",
    category: "AI & ML",
  },
  {
    title: "Python Programming",
    issuer: "Dicoding",
    date: "2024",
    credentialId: "Dicoding Indonesia",
    link: "#",
    category: "Programming",
  },
  {
    title: "Git & GitHub",
    issuer: "Dicoding",
    date: "2024",
    credentialId: "Dicoding Indonesia",
    link: "#",
    category: "Tools",
  },
];

const categories = [
  "Semua",
  "Cloud",
  "Back-End & Web",
  "AI & ML",
  "Programming",
  "Tools",
];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredCertificates =
    activeCategory === "Semua"
      ? certificates
      : certificates.filter(
          (certificate) => certificate.category === activeCategory
        );

  return (
    <section
      id="certificates"
      className="bg-white px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-270">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#0075de]">
              Credentials
            </p>

            <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#000000] sm:text-[44px]">
              Sertifikat & pelatihan.
            </h2>

            <p className="mt-4 text-base leading-[1.6] text-[#615d59]">
              Beberapa sertifikasi dan pelatihan yang mendukung perjalanan saya
              di software engineering dan cloud computing.
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sticker-purple text-sticker-purple-deep">
            <FiAward className="h-5 w-5" />
          </div>
        </div>

        {/* Filter */}
        <div className="mb-5 flex gap-1 overflow-x-auto rounded-lg border border-[#e6e6e6] bg-[#f6f5f4] p-1">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-[5px] px-3 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-white text-[#0075de] shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                    : "text-[#615d59] hover:text-[#000000]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Collection */}
        <div className="overflow-hidden rounded-xl border border-[#e6e6e6]">
          <div className="hidden grid-cols-[1fr_170px_120px_90px] gap-4 border-b border-[#e6e6e6] bg-[#f6f5f4] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1px] text-[#a39e98] sm:grid">
            <span>Certificate</span>
            <span>Issuer</span>
            <span>Date</span>
            <span />
          </div>

          {filteredCertificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group border-b border-[#e6e6e6] bg-white px-5 py-5 last:border-b-0"
            >
              <div className="grid gap-4 sm:grid-cols-[1fr_170px_120px_90px] sm:items-center sm:gap-4">
                {/* Certificate */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f5f4] text-[#0075de]">
                    {certificate.issuer === "Google Cloud" ||
                    certificate.issuer === "Bangkit Academy" ? (
                      <SiGooglecloud className="h-4 w-4" />
                    ) : (
                      <FiAward className="h-4 w-4" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#000000]">
                      {certificate.title}
                    </h3>

                    <p className="mt-0.5 text-[12px] leading-[1.4] text-[#a39e98]">
                      {certificate.credentialId}
                    </p>
                  </div>
                </div>

                {/* Issuer */}
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[#a39e98] sm:hidden">
                    Issuer
                  </span>
                  <span className="text-[14px] text-[#615d59]">
                    {certificate.issuer}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[#a39e98] sm:hidden">
                    Date
                  </span>
                  <span className="text-[14px] text-[#615d59]">
                    {certificate.date}
                  </span>
                </div>

                {/* Link */}
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-[5px] px-2 py-1.5 text-[13px] font-medium text-[#0075de] transition-colors hover:bg-[#f6f5f4]"
                >
                  Lihat
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-3 ml-12">
                <span className="rounded-full bg-[#f6f5f4] px-2 py-1 text-[11px] font-medium text-[#615d59]">
                  {certificate.category}
                </span>
              </div>
            </article>
          ))}

          {!filteredCertificates.length && (
            <div className="px-5 py-12 text-center text-[14px] text-[#a39e98]">
              Tidak ada sertifikat dalam kategori ini.
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between text-[13px] text-[#a39e98]">
          <span>
            Menampilkan {filteredCertificates.length} dari {certificates.length}{" "}
            sertifikat
          </span>
          <span className="hidden sm:inline">Updated 2026</span>
        </div>
      </div>
    </section>
  );
}
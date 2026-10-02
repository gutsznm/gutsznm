"use client";

import Image from "next/image";
import { FaAws } from "react-icons/fa6";
import { FiAward, FiFolder } from "react-icons/fi";
import { SiGooglecloud, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#213183] bg-[#213183] px-6 pb-16 pt-28 text-white sm:px-12 md:px-16 md:pb-20 md:pt-32">
      <div className="mx-auto grid max-w-270 items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-16">
        {/* Content */}
        <div>
          <h1 className="mb-6 max-w-2xl text-[44px] font-bold leading-[1.04] tracking-[-1.5px] sm:text-[54px] sm:tracking-[-1.875px] lg:text-[64px] lg:leading-none lg:tracking-[-2.125px]">
            Deni Sahendra.
            <br />
            <span className="text-sticker-sky">Software Engineer</span>
            <br />
            & <span className="text-sticker-purple">Cloud Enthusiast.</span>
          </h1>

          <p className="mb-7 max-w-140 text-base leading-normal text-white/80">
            Alumnus Bangkit 2024 spesialisasi Cloud Computing dengan 10
            sertifikasi di bidang Google Cloud, AWS, Back-End, & Web
            Engineering.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0075de] px-5 py-2.5 text-base font-medium leading-normal text-white transition-colors hover:bg-[#005bab] active:scale-[0.97]"
            >
              <FiFolder className="h-4 w-4" />
              Lihat 3 Proyek
            </a>

            <a
              href="#certificates"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-medium leading-normal text-black transition-all hover:bg-[#f6f5f4] active:scale-[0.97]"
            >
              <FiAward className="h-4 w-4 text-[#0075de]" />
              10 Sertifikat
            </a>
          </div>
        </div>

        {/* Sticker Composition */}
        <div className="relative mx-auto hidden h-90 w-100 lg:block">
          <span className="absolute right-28 top-3 z-30 inline-flex rotate-3 items-center gap-2 rounded-xl bg-sticker-sky px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm">
            <SiGooglecloud className="h-3.5 w-3.5" />
            Bangkit 2024 Cloud Cohort
          </span>

          <span className="absolute right-2 top-16 z-20 inline-flex -rotate-4 items-center gap-2 rounded-xl bg-sticker-purple px-3.5 py-1.5 text-xs font-semibold text-sticker-purple-deep shadow-sm">
            <FaAws className="h-3.5 w-3.5" />
            AWS & GCP Trained
          </span>

          <span className="absolute right-24 top-24 z-30 inline-flex rotate-2 items-center gap-2 rounded-xl bg-sticker-teal px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm">
            <SiNextdotjs className="h-3.5 w-3.5" />
            Fullstack Web & API
          </span>

          <div className="absolute right-4 top-20 z-10 w-67.5 -rotate-3 overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
            <Image
              src="/profile-card.jpeg"
              alt="Deni Sahendra"
              width={400}
              height={400}
              priority
              className="block w-full"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mx-auto mt-12 max-w-270 border-t border-white/10 pt-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-white/65">
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            TypeScript & JavaScript
          </span>
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            GCP
          </span>
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            GitHub Actions CI/CD
          </span>
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            PostgreSQL & MySQL
          </span>
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            MongoDB
          </span>
          <span className="rounded-sm bg-white/10 px-2.5 py-1">
            Git
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FiCloud, FiCode, FiTarget } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Software Engineering",
    desc: "Membangun aplikasi web dan API dengan struktur yang rapi, responsif, dan mudah dikembangkan.",
    accent: "#62aef0",
    rotate: "-rotate-2",
  },
  {
    icon: FiCloud,
    title: "Cloud Computing",
    desc: "Mempelajari deployment, containerization, dan infrastruktur cloud untuk aplikasi yang reliable.",
    accent: "#d6b6f6",
    rotate: "rotate-1",
  },
  {
    icon: FiTarget,
    title: "Ready to Grow",
    desc: "Terbuka untuk berkontribusi dalam tim, belajar dari pengalaman, dan berkembang bersama tim.",
    accent: "#2a9d99",
    rotate: "-rotate-1",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f6f5f4] px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-270">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Intro */}
          <div className="relative">
            <p className="mb-3 text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.125px] text-[#0075de]">
              Tentang Saya
            </p>

            <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-1px] text-[#000000] sm:text-[44px]">
              Singkat.
              <br />
              <span className="text-[#213183]">Tapi terus berkembang.</span>
            </h2>

            <p className="mt-5 max-w-110 text-base leading-[1.6] text-[#615d59]">
              Fresh graduate Informatika yang berfokus pada software engineering
              dan cloud computing. Saya senang membangun sesuatu dari backend,
              API, hingga deployment dan infrastructure.
            </p>

            {/* Decorative note */}
            <div className="mt-8 inline-flex rotate-2 items-center gap-2 rounded-lg bg-[#fff4b8] px-4 py-2.5 text-[14px] font-medium text-[#523410] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span>✦</span>
              Always learning, always building.
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-xl border border-[#e6e6e6] bg-white p-5 ${item.rotate}`}
                >
                  <div
                    className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-40"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${item.accent}25`,
                        color: item.accent,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[12px] font-semibold text-[#a39e98]">
                          0{index + 1}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[#a39e98]" />
                        <span className="text-[12px] font-medium text-[#a39e98]">
                          Focus
                        </span>
                      </div>

                      <h3 className="text-[20px] font-semibold leading-[1.4] tracking-[-0.125px] text-[#000000]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[15px] leading-normal text-[#615d59]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom facts */}
        <div className="mt-14 grid border-y border-[#e6e6e6] sm:grid-cols-3">
          <div className="border-b border-[#e6e6e6] px-1 py-5 sm:border-b-0 sm:border-r sm:px-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Education
            </p>
            <p className="mt-1 text-[15px] font-medium text-[#31302e]">
              S1 Informatika
            </p>
          </div>

          <div className="border-b border-[#e6e6e6] px-1 py-5 sm:border-b-0 sm:border-r sm:px-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Specialization
            </p>
            <p className="mt-1 text-[15px] font-medium text-[#31302e]">
              Cloud Computing
            </p>
          </div>

          <div className="px-1 py-5 sm:px-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Experience
            </p>
            <p className="mt-1 text-[15px] font-medium text-[#31302e]">
              Projects & Bangkit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
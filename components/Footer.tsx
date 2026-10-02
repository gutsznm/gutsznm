"use client";

import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Sertifikasi", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e6e6] bg-[#f6f5f4] px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-270">
        {/* Main footer */}
        <div className="grid gap-10 border-b border-[#e6e6e6] pb-10 md:grid-cols-[1fr_auto_auto] md:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[18px] font-bold tracking-[-0.25px] text-[#000000] transition-opacity hover:opacity-70"
            >
              Deni Sahendra
            </a>

            <p className="mt-3 max-w-xs text-[14px] leading-[1.55] text-[#615d59]">
              Software Engineer dengan fokus pada web development, backend,
              dan cloud computing.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0075de] transition-colors hover:text-[#005bab]"
            >
              Let&apos;s work together
              <FiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Explore
            </p>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#615d59] transition-colors hover:text-[#0075de]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Connect
            </p>

            <div className="flex gap-2">
              <a
                href="https://github.com/gutsznm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#31302e] transition-colors hover:bg-[#000000] hover:text-white"
              >
                <FiGithub className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com/in/denisahendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#31302e] transition-colors hover:bg-[#0075de] hover:text-white"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>

              <a
                href="mailto:denisahendra123@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#31302e] transition-colors hover:bg-[#0075de] hover:text-white"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-6 text-[13px] leading-[1.43] text-[#a39e98] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Deni Sahendra.</span>

          <div className="flex items-center gap-3">
            <span>Built with Next.js & TypeScript</span>
            <span className="h-1 w-1 rounded-full bg-[#a39e98]" />
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiSend, FiX } from "react-icons/fi";

interface HeaderProps {
  activeSection?: string;
}

const navLinks = [
  { name: "Home", href: "#", id: "home" },
  { name: "Tentang", href: "#about", id: "about" },
  { name: "Proyek", href: "#projects", id: "projects" },
  { name: "Keahlian", href: "#skills", id: "skills" },
  { name: "Sertifikasi", href: "#certificates", id: "certificates" },
];

export default function Header({ activeSection = "home" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-225 rounded-2xl border border-[#e6e6e6] bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled
            ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-5">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavigation(link.id)}
                  className={`rounded-lg px-3 py-1.5 text-[14px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#f6f5f4] text-[#0075de]"
                      : "text-[#615d59] hover:bg-[#f6f5f4] hover:text-[#000000]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => handleNavigation("contact")}
              className="hidden items-center gap-1.5 rounded-full bg-[#0075de] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#005bab] active:scale-[0.97] sm:inline-flex"
            >
              <FiSend className="h-3.5 w-3.5" />
              Hubungi Saya
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={
                isMobileMenuOpen
                  ? "Tutup menu navigasi"
                  : "Buka menu navigasi"
              }
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#31302e] transition-colors hover:bg-[#f6f5f4] md:hidden"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-[#e6e6e6] px-4 pb-4 pt-3 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavigation(link.id)}
                    className={`rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#f6f5f4] text-[#0075de]"
                        : "text-[#615d59] hover:bg-[#f6f5f4] hover:text-[#000000]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="mt-3 border-t border-[#e6e6e6] pt-3">
              <a
                href="#contact"
                onClick={() => handleNavigation("contact")}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0075de] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#005bab]"
              >
                <FiSend className="h-3.5 w-3.5" />
                Hubungi Saya
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
"use client";

import FlipWords from "./flip-words-name";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { Preview } from '@/components/ui/preview';

export default function Hero() {
  const GOOGLE_DRIVE_FILE_ID = '1JmGCF-75KNVIzyi0U7yNQz_Bkr3p6rtA';

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-sm mx-auto text-center">
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border/40 hover:border-primary/40 transition-colors">
          <Image
            src="https://github.com/gutsznm.png"
            alt="Deni Sahendra"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

        <p className="text-xs sm:text-sm text-muted-foreground tracking-[0.3em] uppercase">
          Deni Sahendra
        </p>

        <div className="mt-2">
          <FlipWords />
        </div>

        <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-light tracking-wide">
          Building scalable systems with precision
        </p>

        <hr className="my-6 border-border/40" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground font-mono">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <a 
              href="https://linkedin.com/in/denisahendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="sm:hidden text-[10px]">LinkedIn</span>
            </a>
            <span className="text-muted-foreground/20">|</span>
            <a 
              href="mailto:denisahendra123@gmail.com"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
              aria-label="Send Email"
            >
              <MdEmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="sm:hidden text-[10px]">Email</span>
            </a>
          </div>

          <span className="hidden sm:inline text-muted-foreground/20">|</span>

          <span className="text-[10px] sm:text-xs">Karawang, Indonesia</span>
          </div>
        </div>

        <div className="mt-3 text-[9px] sm:text-[10px] font-mono text-muted-foreground/60 hover:text-foreground transition-colors no-underline flex items-center justify-center gap-1.5">
          <Preview 
            fileId={GOOGLE_DRIVE_FILE_ID} 
            triggerText="View Resume"
          />
        </div>
      </div>
    </section>
  );
}
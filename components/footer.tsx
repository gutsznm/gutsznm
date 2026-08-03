import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiMedium, SiGmail  } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-border/40 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gutsznm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5 text-muted-foreground/60"
              aria-label="GitHub"
            >
              <FiGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://linkedin.com/in/denisahendra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5 text-muted-foreground/60"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://medium.com/@denisahendra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5 text-muted-foreground/60"
              aria-label="Medium"
            >
              <SiMedium className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
            </a>
            <a
              href="mailto:denisahendra123@gmail.com"
              className="hover:text-foreground transition-colors flex items-center gap-1.5 text-muted-foreground/60"
              aria-label="Send Email"
            >
              <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/60">
            &copy; {currentYear} Deni Sahendra
          </p>
        </div>
      </div>
    </footer>
  );
}
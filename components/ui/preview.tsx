"use client";

import { useState, ReactNode, useEffect } from 'react';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

interface PreviewProps {
  fileId: string;
  triggerText?: string;
  triggerClassName?: string;
  trigger?: ReactNode;
  maxWidth?: string;
  height?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onLoad?: () => void;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
}

export function Preview({
  fileId,
  triggerText = "View",
  triggerClassName = "text-[10px] sm:text-[12px] font-mono hover:text-foreground transition-colors no-underline flex items-center justify-center gap-1.5",
  trigger,
  maxWidth = "max-w-5xl",
  height = "h-[85vh]",
  onOpen,
  onClose,
  onLoad,
  loadingComponent,
  errorComponent,
}: PreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
    setHasError(false);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = embedUrl;
    }
  };

  const defaultLoading = (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  );

  const defaultError = (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900 p-4 text-center">
      <div className="w-16 h-16 bg-destructive/10 flex items-center justify-center">
        <FiX className="w-8 h-8 text-destructive" />
      </div>
      <p className="text-sm text-muted-foreground">
        Failed to load
      </p>
      <button
        onClick={handleRetry}
        className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );

  return (
    <>
      {trigger ? (
        <div onClick={handleOpen}>{trigger}</div>
      ) : (
        <button onClick={handleOpen} className={triggerClassName}>
          {triggerText}
        </button>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div 
            className={`
              relative bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden
              ${isFullscreen 
                ? 'w-screen h-screen rounded-none' 
                : `w-full ${isMobile ? 'max-w-full h-[95vh]' : `${maxWidth} ${height}`}`
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
                onClick={handleClose}
                className="p-1.5 sm:p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Close"
              >
                <FiX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>

            <div className="w-full h-full relative">
              {isLoading && (loadingComponent || defaultLoading)}
              {hasError && (errorComponent || defaultError)}

              <iframe
                src={embedUrl}
                className="w-full h-full"
                title="Preview"
                loading="lazy"
                allow="autoplay"
                onLoad={handleLoad}
                onError={handleError}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
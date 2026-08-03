"use client";

import { useState, ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

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
  const [isFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div 
            className={`
              relative bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden
              ${isFullscreen ? 'w-screen h-screen' : `w-full ${maxWidth} ${height}`}
              transition-all duration-300 ease-out
            `}
          >
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
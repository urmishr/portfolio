import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineArrowDownTray, HiOutlineXMark } from 'react-icons/hi2';
import ResumePdfViewer from './ResumePdfViewer';

const RESUME_URL = '/urmish_resume.pdf';

export default function ResumePreviewModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <button
        type="button"
        className="absolute inset-0 bg-dark-500/70 backdrop-blur-sm cursor-pointer"
        aria-label="Close resume preview"
        onClick={onClose}
      />
      <div className="relative z-10 flex h-[min(90vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-light-400/10 bg-light-100 shadow-[0_24px_90px_rgba(0,0,0,0.35)] dark:border-dark-200/20 dark:bg-dark-500">
        <div className="flex items-center justify-between gap-4 border-b border-light-400/10 px-4 py-3 dark:border-dark-200/20 sm:px-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-light-400/70 dark:text-dark-100/70">
              Resume preview
            </p>
            <p className="text-base font-semibold text-light-400 dark:text-dark-100">
              Urmish Ramani
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              download
              className="inline-flex sm:hidden size-10 items-center justify-center rounded-full border border-light-400/20 bg-light-200 text-light-400 transition hover:bg-light-300 dark:border-dark-200/20 dark:bg-dark-300 dark:text-dark-100 dark:hover:bg-dark-400"
              aria-label="Download resume"
            >
              <HiOutlineArrowDownTray className="size-5" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-light-400/20 bg-light-200 px-2.5 py-1.5 text-sm font-semibold text-light-400 transition hover:bg-light-300 dark:border-dark-200/20 dark:bg-dark-300 dark:text-dark-100 dark:hover:bg-dark-400"
            >
              <HiOutlineArrowDownTray className="size-5" />
              <span>Download</span>
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-light-400/15 bg-light-200 p-2 text-light-400 transition hover:bg-light-300 dark:border-dark-200/20 dark:bg-dark-400 dark:text-dark-100 dark:hover:bg-dark-300"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <HiOutlineXMark className="size-5" />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-light-300/40 dark:bg-dark-400/40">
          <ResumePdfViewer />
        </div>
      </div>
    </div>,
    document.body,
  );
}

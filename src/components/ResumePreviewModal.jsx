import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineArrowDownTray, HiOutlineXMark } from 'react-icons/hi2';
import ResumePdfViewer from './ResumePdfViewer';

const RESUME_URL = '/urmish_resume.pdf';
const EXIT_TRANSITION_MS = 260;

export default function ResumePreviewModal({ open, onClose }) {
  const [shouldRender, setShouldRender] = useState(open);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    clearTimeout(closeTimerRef.current);

    if (open) {
      setShouldRender(true);
      return undefined;
    }

    closeTimerRef.current = setTimeout(() => {
      setShouldRender(false);
    }, EXIT_TRANSITION_MS);

    return () => clearTimeout(closeTimerRef.current);
  }, [open]);

  useEffect(() => {
    if (!shouldRender) return undefined;

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
  }, [onClose, shouldRender]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-[260ms] ease-out sm:p-6 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <button
        type="button"
        className={`absolute inset-0 cursor-pointer bg-black/70 transition-[opacity,backdrop-filter] duration-[260ms] ease-out ${open ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-0'}`}
        aria-label="Close resume preview"
        onClick={onClose}
      />
      <div
        className={`relative z-10 flex h-[min(90vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131316] shadow-[0_24px_90px_rgba(0,0,0,0.5)] transition-[opacity,transform] duration-[260ms] ease-out ${open ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-[0.98] opacity-0'}`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b8b93]">Resume preview</p>
            <p className="text-base font-semibold text-[#f4f4f5]">Urmish Ramani</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              download
              className="inline-flex sm:hidden size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f4f4f5] transition hover:bg-white/10"
              aria-label="Download resume"
            >
              <HiOutlineArrowDownTray className="size-5" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm font-semibold text-[#f4f4f5] transition hover:bg-white/10"
            >
              <HiOutlineArrowDownTray className="size-5" />
              <span>Download</span>
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[#f4f4f5] transition hover:bg-white/10"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <HiOutlineXMark className="size-5" />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-black/20">
          <ResumePdfViewer />
        </div>
      </div>
    </div>,
    document.body,
  );
}

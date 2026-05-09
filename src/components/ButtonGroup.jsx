import { HiOutlineEye, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import Button from './ui/Button';
import copy from 'copy-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import ResumePreviewModal from './ResumePreviewModal';

const EMAILADDRESS = 'ramani.urmish@gmail.com';
export default function ButtonGroup() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    const success = copy(EMAILADDRESS);

    if (success) {
      setIsCopied(true);

      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 1400);
    }
  };
  return (
    <div className="flex flex-nowrap gap-3 ">
      <Button onClick={() => setIsResumeOpen(true)}>
        <span>
          <HiOutlineEye className="size-5 lg:size-7" />
        </span>
        Resume
      </Button>
      <Button onClick={handleCopyEmail} aria-label="Copy email address">
        <span>
          <HiOutlineClipboardDocumentCheck className="size-5 lg:size-7" />
        </span>
        <span
          className="relative inline-flex h-[1em] min-w-[10ch] items-center overflow-hidden align-middle leading-none"
          aria-live="polite"
        >
          <span
            className={`absolute inset-0 flex items-center justify-start whitespace-nowrap leading-none transition-transform duration-500 ease-out ${
              isCopied ? 'translate-y-[110%]' : 'translate-y-0'
            }`}
          >
            Copy Email
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-start whitespace-nowrap leading-none transition-transform duration-500 ease-out ${
              isCopied ? 'translate-y-0' : 'translate-y-[-110%]'
            }`}
          >
            Copied!
          </span>
        </span>
      </Button>
      <ResumePreviewModal
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

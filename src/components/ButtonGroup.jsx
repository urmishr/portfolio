import {
  HiArrowDownTray,
  HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2';
import Button from './ui/Button';
import toast from 'react-hot-toast';

export default function ButtonGroup() {
  const EMAILADDRESS = 'ramani.urmish@gmail.com';

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(EMAILADDRESS)
        .then(() => toast.success('Email Copied to clipboard'))
        .catch(() => toast.error('Failed to copy email'));
    } else {
      // Fallback for older browsers or insecure context
      const textArea = document.createElement('textarea');
      textArea.value = EMAILADDRESS;
      textArea.style.position = 'fixed'; // Prevent scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        toast.success('Email Copied to clipboard');
      } catch {
        toast.error('Failed to copy email');
      }
      document.body.removeChild(textArea);
    }
  };
  return (
    <div className="flex gap-3 ">
      <a href="urmish_resume.pdf" target="_blank" download>
        <Button>
          <span>
            <HiArrowDownTray className="size-5 lg:size-7" />
          </span>
          Resume
        </Button>
      </a>
      <Button onClick={handleCopyEmail}>
        <span>
          <HiOutlineClipboardDocumentCheck className="size-5 lg:size-7" />
        </span>
        Copy Email
      </Button>
    </div>
  );
}

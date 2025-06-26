import {
  HiArrowDownTray,
  HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2';
import Button from './ui/Button';
import toast from 'react-hot-toast';
import copy from 'copy-to-clipboard';

const EMAILADDRESS = 'ramani.urmish@gmail.com';
export default function ButtonGroup() {
  const handleCopyEmail = () => {
    const success = copy(EMAILADDRESS);

    if (success) {
      toast.success('Email Copied to clipboard');
    } else {
      toast.error('Failed to copy email');
    }
  };
  return (
    <div className="flex gap-3 ">
      <a href="/urmish_resume.pdf" target="_blank" download>
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

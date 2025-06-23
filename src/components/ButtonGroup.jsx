import {
  HiArrowDownTray,
  HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2';
import Button from './Button';

export default function ButtonGroup() {
  return (
    <div className="flex gap-3 ">
      <Button>
        <span>
          <HiArrowDownTray />
        </span>
        Resume
      </Button>
      <Button>
        <span>
          <HiOutlineClipboardDocumentCheck />
        </span>
        Copy Email
      </Button>
    </div>
  );
}

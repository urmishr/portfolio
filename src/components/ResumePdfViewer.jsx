import { useEffect, useRef, useState } from 'react';
import {
  GlobalWorkerOptions,
  getDocument,
} from 'pdfjs-dist/legacy/build/pdf.mjs';
import pdfWorkerUrl from 'pdfjs-dist/legacy/build/pdf.worker.mjs?url';

const RESUME_URL = '/urmish_resume.pdf';

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

function ResumePdfPage({ pdfDocument, pageNumber, containerWidth }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!pdfDocument || !containerWidth || !canvasRef.current) return undefined;

    let renderTask = null;
    let cancelled = false;

    const renderPage = async () => {
      const page = await pdfDocument.getPage(pageNumber);

      if (cancelled || !canvasRef.current) return;

      const baseViewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / baseViewport.width;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (!context) return;

      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = '100%';
      canvas.style.height = 'auto';

      renderTask = page.render({
        canvasContext: context,
        viewport,
        transform:
          outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null,
      });

      await renderTask.promise;
    };

    renderPage().catch(() => {});

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [containerWidth, pageNumber, pdfDocument]);

  return (
    <div className="mx-auto w-full">
      <canvas ref={canvasRef} className="block w-full rounded-xl border border-white/10 bg-white shadow-sm" />
    </div>
  );
}

export default function ResumePdfViewer() {
  const [pdfDocument, setPdfDocument] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const loadingTask = getDocument({ url: RESUME_URL });

    loadingTask.promise
      .then((doc) => {
        if (!isMounted) {
          doc.destroy();
          return;
        }

        setPdfDocument(doc);
        setPageCount(doc.numPages);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError(true);
        setLoading(false);
      });

    return () => {
      isMounted = false;
      loadingTask.destroy();
    };
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const updateWidth = () => {
      setContainerWidth(element.clientWidth);
    };

    updateWidth();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center px-6 py-10 text-center text-sm font-medium text-[#f4f4f5]/70">
        Unable to load the resume preview.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-full overflow-auto px-3 py-4 sm:px-6 sm:py-6"
      style={{ overscrollBehavior: 'contain' }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 sm:gap-5">
        {loading ? (
          <div className="flex h-[60vh] items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5 text-sm font-medium text-[#f4f4f5]/60">
            Loading resume...
          </div>
        ) : (
          Array.from({ length: pageCount }, (_, index) => (
            <ResumePdfPage
              key={index + 1}
              pdfDocument={pdfDocument}
              pageNumber={index + 1}
              containerWidth={containerWidth}
            />
          ))
        )}
      </div>
    </div>
  );
}

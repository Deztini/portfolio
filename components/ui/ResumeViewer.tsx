"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();


export default function ResumeViewer({ fileUrl }: { fileUrl: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [pages, setPages] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!box.current) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(box.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className="h-full overflow-y-auto">
      {failed ? (
        <p className="p-6 text-center text-muted">
          Couldn&apos;t load the preview. Use the buttons below.
        </p>
      ) : (
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setPages(numPages)}
          onLoadError={() => setFailed(true)}
          loading={<p className="p-6 text-center text-muted">Loading resume…</p>}
        >
          {Array.from({ length: pages }, (_, i) => (
            <Page key={i} pageNumber={i + 1} width={width} className="mb-4" />
          ))}
        </Document>
      )}
    </div>
  );
}





import React, { useEffect, useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import KaileighResume from '../public/Kaileigh-Bonaccorsi-Resume.pdf';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="page-container p-2">
      <div className="resume-container d-flex justify-content-center">
      <form method="get" action={KaileighResume}>
        <button className="btns border-2 rounded-3 m-1 download" type="submit">Download!</button>
        </form>
        {/* <Document
          file={KaileighResume}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map(page => <Page pageNumber={page} />
            )}
        </Document> */}
      </div>
    </div>
  );
}
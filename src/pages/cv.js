import React, { useState } from "react";
import Layout from "../components/layout";
import "./cv.module.scss";
import Head from "../components/head";
import { SizeMe } from "react-sizeme";
// PDF
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import cvPDF from "../../static/cv.pdf";

const CVPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
      <Head title="CV" />
      <h1>
        Download a copy of my CV <a href="../cv.pdf">here</a>
      </h1>
      <SizeMe>
        {({ size }) => (
          <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                width={size.width ? size.width : 1}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        )}
      </SizeMe>
    </Layout>
  );
};

export default CVPage;

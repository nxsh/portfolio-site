import React, { useState } from "react"
import Layout from "../components/layout"
import * as cvStyles from "./cv.module.scss"
import Head from "../components/head"

// PDF
import { Document, Page } from "react-pdf"
import { pdfjs } from "react-pdf"
import cvPDF from "../assets/cv.pdf"

const CVPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Layout>
      <Head title="CV" />
      <div className={cvStyles.container}>
        <div className={cvStyles.content}>
          <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </Layout>
  )
}

export default CVPage

import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@openbook/cloudpdf-viewer";

import Layout from "../components/layout";
import * as cvStyles from "./cv.module.scss";
import Head from "../components/head";

import cvPDF from "../assets/cv.pdf";

const CVPage = () => {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "61f0be8d-c0cf-44db-80ec-82f55757a662",
        darkMode: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <Layout>
      <Head title="CV" />
      <div className={cvStyles.container}>
        <div className={cvStyles.viewer} ref={viewer}></div>
      </div>
    </Layout>
  );
};

export default CVPage;

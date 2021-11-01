import React from "react";
import Layout from "../components/layout";
import * as cvStyles from "./cv.module.scss";
import Head from "../components/head";

import cvPDF from "../assets/cv.pdf";

const CVPage = () => {
  return (
    <Layout>
      <Head title="CV" />

      <div className={cvStyles.container}>
        <iframe src={`${cvPDF}#view=fitH`} title="RN_CV" />
      </div>
    </Layout>
  );
};

export default CVPage;

import React from "react"
import { Link } from "gatsby" // Named import between brackets
import Layout from "../components/layout"
// in React index.js is the equivalent of index.html

import Head from "../components/head"
const IndexPage = () => {
  // IndexPage is equal to an anonymous func
  return (
    <Layout>
      <Head title="Home" />
      <h2>I'm Ryan, a full-stack developer living in London.</h2>
      <p>
        Welcome to my personal blog, here you will find blog posts relating to
        software development, infosec, cooking, and occasionally my other
        interests.
      </p>

      <p>
        It also provides an easy way to contact me, view my GitHub, and see an
        online version of my CV, with an option to download it as a PDF.
      </p>

      {/* Normal anchor tags can be used for external links */}
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

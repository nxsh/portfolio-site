import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Go home...</Link>
      </p>
    </Layout>
  )
}

export default NotFound

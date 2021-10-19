import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import * as postStyles from "./post.module.scss"
import Head from "../components/head"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()
// Note this does not use graphql(``) notation?
export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`

// Our blog component here uses the above query and accesses it using props
// How does this work?
const Post = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Post

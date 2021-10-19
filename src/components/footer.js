import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.scss"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.content}>
      <hr />
      <div className={footerStyles.con}>
        <div className={footerStyles.sec}>
          <p className={footerStyles.text}>
            <FaLinkedin className={footerStyles.reactIcons} />{" "}
            <a href="https://linkedin.com/in/nxsh" target="__blank">
              Ryan Nash
            </a>
          </p>
          <p className={footerStyles.text}>
            <FaEnvelope className={footerStyles.reactIcons} />{" "}
            <a href="mailto:ryan@renash.co.uk" target="__blank">
              ryan@renash.co.uk
            </a>
          </p>
        </div>
        <div className={footerStyles.sec}>
          <p className={footerStyles.textRight}>
            <FaGithub className={footerStyles.reactIcons} />{" "}
            <a href="https://github.com/nxsh" target="__blank">
              @nxsh
            </a>
          </p>
          <p className={footerStyles.textRight}>
            <FaTwitter className={footerStyles.reactIcons} />{" "}
            <a href="https://twitter.com/ref_nash" target="__blank">
              @ref_nash
            </a>
          </p>
        </div>
        <div className={footerStyles.breakColumn}>
          <p className={footerStyles.textCenter}>
            {data.site.siteMetadata.author} © 2021
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

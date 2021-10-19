import React from "react"
import Header from "./header"
import Footer from "./footer"
import * as layoutStyles from "./layout.module.scss"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <hr />
        {props.children}
        {/*the jsx passed from a page's elements, for each page whatever is between the Layout tags*/}
      </div>

      <Footer />
    </div>
  )
}

export default Layout

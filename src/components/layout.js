import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
          bottom: `0px`,
          position: `absolute`,
          width: `100%`,
          padding: `0 33px`,
          fontSize: `10px`,
        }}
      >
        © {new Date().getFullYear()}, Felix Gyamfi
        {` `}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

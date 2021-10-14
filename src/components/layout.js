import * as React from "react"
import { useState, useEffect } from "react"
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

  const [vpHeight, setVpHeight] = useState(0)
  const footerHeight = 1 * 30 //10 for rems

  useEffect(() => {
    const height = parseFloat(window.visualViewport.height)
    const vpHeight = height - footerHeight
    setVpHeight(vpHeight)
  }, [vpHeight])

  return (
    <div
      style={{
        maxHeight: `100vh`,
        display: `grid`,
        gridTemplate: `${vpHeight}px ${footerHeight}rem / 100%`,
      }}
    >
      <main
        style={{
          width: `100vw`,
          background: `green`,
        }}
      >
        {children}
      </main>
      <footer
        style={{
          gridArea: `2/1`,
          backgroundColor: `blue`,
          padding: `0 3.3rem`,
          fontSize: `1rem`,
        }}
      >
        © {new Date().getFullYear()}, Felix Gyamfi
        {` `}
      </footer>
    </div>
  )
}

export default Layout

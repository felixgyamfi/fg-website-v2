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

  const [gridHeight, setGridHeight] = useState(0)
  const footerHeight = 1 //rems

  //calculate Viewport grid height minus footer height; useEffect for access to window attribute
  useEffect(() => {
    const vpHeight = parseFloat(window.visualViewport.height)
    const gridHeight = vpHeight - footerHeight
    setGridHeight(gridHeight)
  }, [gridHeight])

  return (
    <div
      style={{
        maxHeight: `100vh`,
        display: `grid`,
        gridTemplate: `${gridHeight}px ${footerHeight * 10}rem / 100%`,
      }}
    >
      <main
        style={{
          width: `100vw`,
        }}
      >
        {children}
      </main>
      <footer
        style={{
          gridArea: `2/1`,
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

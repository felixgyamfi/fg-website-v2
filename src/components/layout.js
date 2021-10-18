import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/Navigation"
import Footer from "./Footer"

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
  const [footerHeight, setFooterHeight] = useState(10) //px

  //calculate Viewport grid height minus footer height; useEffect for access to window attribute
  useEffect(() => {
    const vpHeight = parseFloat(window.visualViewport.height)
    const gridHeight = vpHeight - footerHeight
    setGridHeight(gridHeight)
    setFooterHeight(10)
  }, [])

  return (
    <>
      <Nav />
      <div
        style={{
          maxHeight: `100vh`,
          display: `grid`,
          gridTemplate: `${gridHeight}px ${footerHeight}px / 100%`,
        }}
      >
        <main
          style={{
            width: `100vw`,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

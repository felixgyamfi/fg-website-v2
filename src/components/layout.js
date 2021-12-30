import * as React from "react"
import { useState, useEffect } from "react"

import "./layout.css"

const Layout = ({ children }) => {
  const [gridHeight, setGridHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0) //px

  //calculate Viewport grid height minus footer height; useEffect for access to window attribute
  useEffect(() => {
    const vpHeight = parseFloat(window.visualViewport.height)
    const gridHeight = vpHeight - footerHeight
    setGridHeight(gridHeight)
    setFooterHeight(10)
  }, [footerHeight])

  return (
    <>
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
      </div>
    </>
  )
}

export default Layout

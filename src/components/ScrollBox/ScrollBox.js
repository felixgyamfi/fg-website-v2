import React from "react"
import { ScrollBoxWrapper, ScrollBox as SBox, Arrow } from "./ScrollBoxElements"

function ScrollBox() {
  return (
    <ScrollBoxWrapper className="ScrollBox">
      <SBox>
        <Arrow className="left">←</Arrow>
        <p>scroll</p>
        <Arrow className="right">→</Arrow>
      </SBox>
    </ScrollBoxWrapper>
  )
}

export default ScrollBox

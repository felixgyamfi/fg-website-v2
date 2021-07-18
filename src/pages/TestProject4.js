import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  left: 6000px;
  background-color: lightsalmon;
  padding: 50px;
`

function TestProject4() {
  return (
    <div className="Test4">
      <Wrapper id="Test4">
        <h1>Test4</h1>
      </Wrapper>
    </div>
  )
}

export default TestProject4

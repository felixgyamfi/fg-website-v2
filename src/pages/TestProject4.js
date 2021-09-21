import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  left: 600rem;
  background-color: lightsalmon;
  padding: 5rem;
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

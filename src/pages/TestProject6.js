import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 200rem;
  left: 600rem;
  background-color: lightblue;
  padding: 5rem;
`

function TestProject6() {
  return (
    <div>
      <Wrapper id="P6">
        <h1>Test6</h1>
      </Wrapper>
    </div>
  )
}

export default TestProject6

import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 2000px;
  left: 6000px;
  background-color: lightblue;
  padding: 50px;
`

function TestProject6() {
  return (
    <div className="Test6">
      <Wrapper id="Test6">
        <h1>Test6</h1>
      </Wrapper>
    </div>
  )
}

export default TestProject6

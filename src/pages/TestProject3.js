import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 4000px;
  left: 6000px;
  background-color: lightgreen;
  padding: 50px;
`

function TestProject3() {
  return (
    <div className="Test3">
      <Wrapper id="Test3">
        <h1>Test3</h1>
      </Wrapper>
    </div>
  )
}

export default TestProject3

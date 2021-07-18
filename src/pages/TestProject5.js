import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 4000px;
  left: 4000px;
  background-color: lightcoral;
  padding: 50px;
`

function TestProject5() {
  return (
    <div className="Test5">
      <Wrapper id="Test5">
        <h1>Test5</h1>
      </Wrapper>
    </div>
  )
}

export default TestProject5

import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 400rem;
  left: 400rem;
  background-color: lightcoral;
  padding: 5rem;
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

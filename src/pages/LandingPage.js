import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 1000px;
  left: 2000px;
  background-color: rgba(223, 221, 217, 1);
  padding: 50px;
`
const TitleWrapper = styled.div`
  max-width: 300px;
`

const TitleHead = styled.h1`
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 0;
`

const TitleText = styled.p`
  font-size: 36px;
  line-height: 43px;
`

function TestProject1() {
  return (
    <div className="Test1">
      <Wrapper id="Test1">
        <TitleWrapper>
          <TitleHead>Felix Gyamfi</TitleHead>
          <TitleText>is a photographer based in Kiel, Germany</TitleText>
        </TitleWrapper>
      </Wrapper>
    </div>
  )
}

export default TestProject1

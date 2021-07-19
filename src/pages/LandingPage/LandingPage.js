import React from "react"
import ImageStack from "./ImageStack"

import {
  Wrapper,
  TitleWrapper,
  TitleText,
  ArrowButton,
  ArrowButtons,
} from "./landingPageElements"

function LandingPage() {
  return (
    <div className="Test1">
      <Wrapper id="Test1">
        <TitleWrapper>
          <TitleText>is a photographer based in Kiel, Germany</TitleText>
        </TitleWrapper>
        <ArrowButtons>
          <ArrowButton className="right">←</ArrowButton>
          <ArrowButton className="left">→</ArrowButton>
        </ArrowButtons>
        <ImageStack />
      </Wrapper>
    </div>
  )
}

export default LandingPage

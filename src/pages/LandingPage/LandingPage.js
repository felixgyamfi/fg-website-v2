import React from "react"
import { ArrowBtns } from "./ArrowButtons"
import ImageStack from "./ImageStack"

import { Wrapper, TitleWrapper, TitleText } from "./LandingPageElements"

function LandingPage() {
  return (
    <div>
      <Wrapper id="landingPage">
        <TitleWrapper>
          <TitleText>is a photographer based in Kiel, Germany</TitleText>
        </TitleWrapper>
        <ArrowBtns />
        <ImageStack className="image-stack" />
      </Wrapper>
    </div>
  )
}

export default LandingPage

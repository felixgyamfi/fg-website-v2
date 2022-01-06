import React from "react"
import Footer from "../../components/Footer/footer"
import Navigation from "../../components/Navigation/Nav"
import { ArrowBtns } from "./ArrowButtons/ArrowButtons"
import ImageStack from "./ImageStack/ImageStack"

import { Wrapper, TitleWrapper, TitleText } from "./LandingPageElements"

function LandingPage() {
  return (
    <>
      <Navigation />
      <Wrapper id="landingPage">
        <TitleWrapper>
          <TitleText>is a photographer based in Kiel, Germany</TitleText>
        </TitleWrapper>
        <ArrowBtns />
        <ImageStack className="image-stack" />
      </Wrapper>
      <Footer />
    </>
  )
}

export default LandingPage

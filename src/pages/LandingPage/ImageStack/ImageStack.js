import React from "react"

import feuerPic from "../../../assets/images/feuer.jpg"
import simiPic from "../../../assets/images/simi.jpg"

import {
  Stack,
  StackItemTop,
  StackItemBottom,
  Container,
} from "./ImageStackElements"

function ImageStack() {
  return (
    <Container className="container">
      <Stack>
        <StackItemTop>
          <img src={simiPic} alt="Simi" />
        </StackItemTop>
        <StackItemBottom>
          <img src={feuerPic} alt="feuer" />
        </StackItemBottom>
      </Stack>
    </Container>
  )
}

export default ImageStack

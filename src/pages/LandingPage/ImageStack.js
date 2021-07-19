import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  Stack,
  StackItemTop,
  StackItemBottom,
  Container,
} from "./imageStackElements"

function ImageStack() {
  return (
    <Container>
      <Stack>
        <StackItemTop>
          <StaticImage src="../../assets/images/Simi_1-2.jpg" alt="Simi" />
        </StackItemTop>
        <StackItemBottom>
          <StaticImage src="../../assets/images/feuer_1.jpg" alt="Feuer" />
        </StackItemBottom>
      </Stack>
    </Container>
  )
}

export default ImageStack
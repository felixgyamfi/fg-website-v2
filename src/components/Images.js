import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.section``

const Images = () => {
  return (
    <Wrapper>
      <h2>gatsby Image</h2>
      <StaticImage src="../assets/images/feuer_1.jpg" alt="" />
    </Wrapper>
  )
}

export default Images

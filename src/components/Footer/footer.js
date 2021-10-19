import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 900;
  grid-area: 2/1;
  padding: 0 3.3rem 0.5rem;
  font-size: 1rem;
  @media screen and (min-width: 992px) {
    padding: 0 6rem 0.5rem;
  }
`

function Footer() {
  return (
    <>
      <Wrapper>
        © {new Date().getFullYear()}, Felix Gyamfi
        {` `}
      </Wrapper>
    </>
  )
}
export default Footer

import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(223, 221, 217, 1);
  z-index: 900;
  grid-area: 2/1;
  padding: 0 3.3rem 0.5rem;
  font-size: 1rem;
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

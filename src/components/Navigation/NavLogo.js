import React from "react"
import styled from "styled-components"
import { CustomLink } from "../Links/CustomLink"

export const Logo = styled.h1`
  list-style: none;
  z-index: 998;
  height: auto;
  font-size: 3.6rem;
  font-style: normal;
  color: rgba(38, 36, 35, 1);
  font-weight: 500;
  margin: 3rem 3.3rem 0;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;

  @media screen and (min-width: 992px) {
    margin: 3rem 6rem 0;
  }
`
export const StyledLink = styled(CustomLink)`
  color: rgba(38, 36, 35, 1);
`

function NavLogo() {
  return (
    <Logo>
      <StyledLink
        pageHash={"#landingPage"}
        pageTitle="Felix Gyamfi"
      ></StyledLink>
    </Logo>
  )
}
export default NavLogo

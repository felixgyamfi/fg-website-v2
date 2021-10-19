import React from "react"
import styled from "styled-components"
import { CustomLink } from "../Links/CustomLink"

const Wrapper = styled.div`
  button {
    text-transform: lowercase;
    text-align: end;
    line-height: normal;
  }

  font-size: 2.4rem;
  line-height: 4rem;
`

const NavLink = styled(CustomLink)``

export const NavItem = ({ pageHash, pageTitle }) => {
  return (
    <Wrapper>
      <li>
        <NavLink pageHash={pageHash} pageTitle={pageTitle + "_"} />
      </li>
    </Wrapper>
  )
}

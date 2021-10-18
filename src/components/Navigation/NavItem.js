import React from "react"
import styled from "styled-components"
import { CustomLink } from "../Links/CustomLink"

const Wrapper = styled.div`
  button {
    text-transform: lowercase;
  }
  font-size: 2.4rem;
  line-height: 3.6rem;
`

const NavLink = styled(CustomLink)``

export const NavItem = ({ pageHash, pageTitle }) => {
  return (
    <Wrapper>
      <li>
        <NavLink pageHash={pageHash} pageTitle={pageTitle} />
      </li>
    </Wrapper>
  )
}

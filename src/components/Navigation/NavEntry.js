import React from "react"
import styled from "styled-components"
import { CustomLink } from "../../components/Navigation/CustomLink"

const Wrapper = styled.div`
  button {
    text-transform: lowercase;
  }
  font-size: 2.4rem;
  line-height: 3.6rem;
`

const NavLink = styled(CustomLink)``

export const NavEntry = ({ pageHash, pageTitle }) => {
  return (
    <Wrapper>
      <NavLink pageHash={pageHash} pageTitle={pageTitle} />
    </Wrapper>
  )
}

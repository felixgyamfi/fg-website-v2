import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-transform: lowercase;
  font-size: 2.4rem;
  line-height: 3.6rem;
`
export const scrollLink = (pageHash = "") => {
  return () => scrollTo(pageHash)
}

export const NavEntry = ({ pageHash, pageTitle }) => {
  return (
    <li>
      <div>
        <NavLink onClick={scrollLink(pageHash)}>{pageTitle}</NavLink>
      </div>
    </li>
  )
}

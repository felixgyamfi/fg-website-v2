import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  text-transform: lowercase;
  font-size: 2.4rem;
  line-height: 3.6rem;
`

const scrollLink = (pageHash = "") => {
  return () => scrollTo(pageHash)
}

export const NavEntry = props => {
  return (
    <li>
      <div>
        <NavLink onClick={scrollLink(props.pageHash)}>
          {props.pageTitle}
        </NavLink>
      </div>
    </li>
  )
}

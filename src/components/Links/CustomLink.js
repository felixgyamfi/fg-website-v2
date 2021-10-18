import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const CstmLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`
export const scrollLink = (pageHash = "") => {
  return () => scrollTo(pageHash)
}

export const CustomLink = ({ pageHash, pageTitle }) => {
  return (
    <>
      <CstmLink onClick={scrollLink(pageHash)}>{pageTitle}</CstmLink>
    </>
  )
}

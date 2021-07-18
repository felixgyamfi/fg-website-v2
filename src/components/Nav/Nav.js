import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import scrollTo from "gatsby-plugin-smoothscroll"

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`

export const Nav = styled.nav`
  display: flex;
`

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0 10px;
  }
`

export const NavLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

function Navigation() {
  return (
    <Wrapper>
      <Nav className="Nav">
        <h3>Navigation</h3>
        <NavLinks>
          <li>
            <NavLink onClick={() => scrollTo("#P1")}>P1</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollTo("#Test1")}>Home</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollTo("#Test3")}>Test3</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollTo("#Test4")}>Test4</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollTo("#Test5")}>Test5</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollTo("#Test6")}>Test6</NavLink>
          </li>
        </NavLinks>
      </Nav>
    </Wrapper>
  )
}

export default Navigation

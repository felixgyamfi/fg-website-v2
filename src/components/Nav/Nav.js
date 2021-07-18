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

function Navigation() {
  return (
    <Wrapper>
      <Nav className="Nav">
        <h3>Navigation</h3>
        <NavLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button onClick={() => scrollTo("#Test1")}>Test4</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#Test2")}>Test5</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#Test3")}>Test6</button>
          </li>
        </NavLinks>
      </Nav>
    </Wrapper>
  )
}

export default Navigation

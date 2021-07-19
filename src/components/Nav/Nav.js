import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"
import { Wrapper, Nav, NavLinks, NavLink } from "./NavElements"

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

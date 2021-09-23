import React, { useState } from "react"

import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Wrapper,
  Nav,
  MenuBtn,
  NavLinks,
  NavLinksBG,
  NavLink,
  Logo,
  StyledLink,
} from "./NavElements"

function Navigation() {
  const [hide, setHide] = useState(true)

  function linkHandler() {
    setHide(true)
  }

  return (
    <Wrapper>
      <Nav className="Nav">
        <StyledLink to="/">
          <Logo>Felix Gyamfi</Logo>
        </StyledLink>
        <MenuBtn onClick={() => setHide(!hide)}>menu</MenuBtn>
        <NavLinksBG className={hide ? "hide" : ""}>
          <NavLinks>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#P1")}>P1_</NavLink>
              </div>
            </li>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#Test1")}>Home_</NavLink>
              </div>
            </li>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#Test3")}>about_</NavLink>
              </div>
            </li>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#Test4")}>Test4_</NavLink>
              </div>
            </li>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#Test5")}>Test5_</NavLink>
              </div>
            </li>
            <li>
              <div onClick={linkHandler}>
                <NavLink onClick={() => scrollTo("#Test6")}>Test6_</NavLink>
              </div>
            </li>
          </NavLinks>
        </NavLinksBG>
      </Nav>
    </Wrapper>
  )
}

export default Navigation

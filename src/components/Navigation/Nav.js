import React, { useState } from "react"
import {
  Wrapper,
  Nav,
  MenuBtn,
  MenuBtnClose,
  NavLinks,
  NavLinksBG,
  Logo,
  StyledLink,
} from "./NavElements"

import { createNavLinks as LinkList } from "./createNavLinks"

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
        <NavLinksBG onClick={linkHandler} className={hide ? "hide" : ""}>
          <NavLinks>
            <LinkList />
          </NavLinks>
          <MenuBtnClose onClick={() => setHide(!hide)}>
            close menu x
          </MenuBtnClose>
        </NavLinksBG>
      </Nav>
    </Wrapper>
  )
}

export default Navigation

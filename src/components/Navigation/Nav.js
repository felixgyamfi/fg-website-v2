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

import { createNavItems as NavItems } from "./createNavItems"

function Navigation() {
  const [hide, setHide] = useState(true)

  function linkHandler() {
    setHide(true)
  }

  return (
    <Wrapper>
      <Nav className="Nav">
        <Logo>
          <StyledLink
            pageHash={"#landingPage"}
            pageTitle="Felix Gyamfi"
          ></StyledLink>
        </Logo>
        <MenuBtn onClick={() => setHide(!hide)}>menu</MenuBtn>
        <NavLinksBG onClick={linkHandler} className={hide ? "hide" : ""}>
          <NavLinks>
            <NavItems />
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

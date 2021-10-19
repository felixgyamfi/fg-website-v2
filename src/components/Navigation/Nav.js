import React, { useState } from "react"
import {
  Wrapper,
  Nav,
  MenuBtn,
  MenuBtnClose,
  NavLinks,
  NavLinksBG,
} from "./NavElements"

import { createNavItems as NavItems } from "./createNavItems"
import NavLogo from "./NavLogo"

function Navigation() {
  const [hide, setHide] = useState(true)

  function linkHandler() {
    setHide(true)
  }

  return (
    <Wrapper>
      <Nav className="Nav">
        <NavLogo></NavLogo>
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

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

  function toggleHide() {
    setHide(true)
  }

  return (
    <Wrapper>
      <Nav className="navigation">
        <NavLogo className="navigation__logo"></NavLogo>
        <MenuBtn
          className="navigation__menu-btn"
          onClick={() => setHide(!hide)}
        >
          menu
        </MenuBtn>
        <NavLinksBG onClick={toggleHide} className={hide ? "hide" : ""}>
          <NavLinks className="navigation__links">
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

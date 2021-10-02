import React, { useState } from "react"
import {
  Wrapper,
  Nav,
  MenuBtn,
  MenuBtnClose,
  NavLinks,
  NavLinksBG,
  NavLink,
  Logo,
  StyledLink,
} from "./NavElements"
import { NavEntry } from "./NavEntry"

function Navigation() {
  const [hide, setHide] = useState(true)

  function linkHandler() {
    setHide(true)
  }

  const routes = {
    P1: "P1",
    HOME: "Home",
    ABOUT: "about_",
    TEST4: "Test4_",
    TEST5: "Test5_",
    TEST6: "Test6_",
  }

  const hashes = {
    P1: "#P1",
    HOME: "#Test1",
    ABOUT: "#Test3",
    TEST4: "#Test4",
    TEST5: "#Test5",
    TEST6: "#Test6",
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
            <NavEntry pageHash={hashes.P1} pageTitle={routes.P1} />
            <NavEntry pageHash={hashes.HOME} pageTitle={routes.HOME} />
            <NavEntry pageHash={hashes.ABOUT} pageTitle={routes.ABOUT} />
            <NavEntry pageHash={hashes.TEST4} pageTitle={routes.TEST4} />
            <NavEntry pageHash={hashes.TEST5} pageTitle={routes.TEST5} />
            <NavEntry pageHash={hashes.TEST6} pageTitle={routes.TEST6} />
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

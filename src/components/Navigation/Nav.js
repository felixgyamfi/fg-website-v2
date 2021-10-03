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
import { NavEntry } from "./NavEntry"

function Navigation() {
  const [hide, setHide] = useState(true)

  function linkHandler() {
    setHide(true)
  }

  const attributes = {
    P1: {
      index: 0,
      ROUTE: "P1",
      HASH: "#P1",
    },
    HOME: {
      index: 1,
      ROUTE: "Home",
      HASH: "#Test1",
    },
    ABOUT: {
      index: 2,
      ROUTE: "about_",
      HASH: "#Test3",
    },
    TEST4: {
      index: 3,
      ROUTE: "Test4_",
      HASH: "#Test4",
    },
    TEST5: {
      index: 4,
      ROUTE: "Test5_",
      HASH: "#Test5",
    },
    TEST6: {
      index: 5,
      ROUTE: "Test6_",
      HASH: "#Test6",
    },
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
            <NavEntry
              pageHash={attributes.P1.HASH}
              pageTitle={attributes.P1.ROUTE}
            />
            <NavEntry
              pageHash={attributes.HOME.HASH}
              pageTitle={attributes.HOME.ROUTE}
            />
            <NavEntry
              pageHash={attributes.ABOUT.HASH}
              pageTitle={attributes.ABOUT.ROUTE}
            />
            <NavEntry
              pageHash={attributes.TEST4.HASH}
              pageTitle={attributes.TEST4.ROUTE}
            />
            <NavEntry
              pageHash={attributes.TEST5.HASH}
              pageTitle={attributes.TEST5.ROUTE}
            />
            <NavEntry
              pageHash={attributes.TEST6.HASH}
              pageTitle={attributes.TEST6.ROUTE}
            />
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

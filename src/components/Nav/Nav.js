import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HashLink } from "react-router-hash-link"

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

export const StyledLink = styled(Link)``

function Navigation() {
  return (
    <Wrapper>
      <Nav className="Nav">
        <h3>Navigation</h3>
        <NavLinks>
          <li>
            <StyledLink smooth to="/TestProject1">
              Test1
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/TestProject2">Test2</StyledLink>
          </li>
          <li>
            <StyledLink to="/TestProject3">Test3</StyledLink>
          </li>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
        </NavLinks>
      </Nav>
    </Wrapper>
  )
}

export default Navigation

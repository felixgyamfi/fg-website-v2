import styled from "styled-components"

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
export const NavLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

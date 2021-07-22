import styled from "styled-components"

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;

  .hide {
    display: none;
  }
`
export const Nav = styled.nav`
  margin-left: 100px;
  margin-top: 100px;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 100px;
  flex-direction: column;
`
export const MenuBtn = styled.button`
  text-decoration: underline;
  transform: rotate(90deg);
  width: auto;
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`
export const NavLinksBG = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  padding-right: 44px;
  padding-top: 22px;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
`

export const NavLinks = styled.ul`
  list-style: none;
  display: unset;
  text-align: right;

  .hide-links {
    display: none;
  }

  li {
    margin: 0 10px;
  }
`
export const NavLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  text-transform: lowercase;
  font-size: 24px;
  line-height: 36px;
`

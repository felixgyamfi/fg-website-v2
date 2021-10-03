import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;

  .hide {
    display: none;
  }
`
export const Nav = styled.nav`
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
export const NavLinksBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  padding: 4.4rem 2.2rem;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.5rem);

  @media screen and (min-width: 992px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 6rem 4.5rem;
  }
`
export const MenuBtn = styled.button`
  border: none;
  text-decoration: none;
  font-weight: 500;
  margin-top: 5.3rem;
  margin-right: 2rem;
  border-bottom: 2.5px solid currentColor;
  transform: rotate(90deg);
  width: auto;
  height: max-content;
  background: none !important;
  padding: 0 !important;
  cursor: pointer;
  font-size: 2.4rem;

  @media screen and (min-width: 992px) {
    transform: unset;
    margin-top: 4.5rem;
    margin-right: 6rem;
  }
`

export const MenuBtnClose = styled(MenuBtn)`
  position: relative;
  margin: 5rem 0 0 0;
  left: -5rem;
  order: -1;

  @media screen and (min-width: 992px) {
    margin: 0;
    left: unset;
    order: unset;
  }
`

export const NavLinks = styled.ul`
  list-style: none;
  display: inline-block;
  text-align: right;
  width: max-content;
  position: relative;
  top: -1.3rem;

  .hide-links {
    display: none;
  }

  button {
    :hover {
      color: whitesmoke;
    }
  }
  li {
    font-weight: 500;
    margin: 0 1rem;
  }
`
export const Logo = styled.h1`
  z-index: 998;
  height: auto;
  width: auto;
  font-size: 3.6rem;
  line-height: 4.3rem;
  font-weight: 500;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(38, 36, 35, 1);
  margin: 3rem 3rem 0;
  width: fit-content;
  height: fit-content;

  @media screen and (min-width: 992px) {
    margin: 5.5rem 6rem 0;
  }
`

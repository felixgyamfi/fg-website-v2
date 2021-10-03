import styled from "styled-components"
import { CustomLink } from "../../components/Navigation/CustomLink"

export const ArrowButton = styled(CustomLink)`
  width: fit-content;
  font-size: inherit;
`
export const ArrowButtons = styled.ul`
  width: 15.5rem;
  height: 7rem;
  font-size: 3.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3.3rem;
  z-index: 100;

  li {
    list-style: none;
  }

  .right {
    li {
      align-self: flex-start;
    }
  }
  .left {
    li {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 992px) {
    width: 20rem;
    height: 12rem;
    font-size: 5rem;
    margin-right: 31rem;
    margin-top: 55vw;
  }
`

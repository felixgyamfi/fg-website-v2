import { Link } from "gatsby"
import styled from "styled-components"

export const ScrollBoxWrapper = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
  height: 100%;
  justify-content: flex-end;
`
export const ScrollBox = styled.div`
  margin-bottom: 3.5rem;
  margin-right: 4.5rem;
  display: flex;
  align-items: center;
  width: 15rem;
  p {
    margin: auto 0;
    text-decoration: underline;
    font-size: 1.8rem;
  }
`
export const Arrow = styled(Link)`
  font-size: 3.6rem;
  margin: 1rem 3rem;
`

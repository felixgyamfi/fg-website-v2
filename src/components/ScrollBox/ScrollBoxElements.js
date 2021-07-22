import { Link } from "gatsby"
import styled from "styled-components"

export const ScrollBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
  height: 100%;
  justify-content: flex-end;
`
export const ScrollBox = styled.div`
  margin-bottom: 35px;
  margin-right: 45px;
  display: flex;
  align-items: center;
  width: 150px;
  p {
    margin: auto 0;
    text-decoration: underline;
  }
`
export const Arrow = styled(Link)`
  font-size: 36px;
  margin: 10px 30px;
`

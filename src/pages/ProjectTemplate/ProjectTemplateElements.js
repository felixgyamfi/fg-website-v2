import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: none;
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  padding: 90px 33px 0;
`
export const ProjectInfo = styled.h1`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-top: 8px;
  text-transform: uppercase;
`
export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17vh;
`
export const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  text-transform: lowercase;
  margin-left: 33px;
`
export const ProjectIndex = styled.p`
  font-size: 80px;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px black;
`
export const LetterDecoration = styled.p`
  margin-top: 25vh;
  position: absolute;
  left: 30%;
  font-size: 600px;
  font-weight: 900;
  color: rgba(38, 36, 35, 1);
`
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
export const ProjectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
`

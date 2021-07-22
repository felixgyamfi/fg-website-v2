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
  padding: 0px 33px 0;
`
export const ProjectInfo = styled.h1`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-top: 70px;
  text-transform: uppercase;
`
export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
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
  margin-top: 0vh;
  position: absolute;
  line-height: 620px;
  left: 30%;
  font-size: 600px;
  font-weight: 900;
  color: rgba(38, 36, 35, 1);
`

export const ProjectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
`

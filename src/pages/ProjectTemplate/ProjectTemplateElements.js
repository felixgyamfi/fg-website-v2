import styled from "styled-components"

const globalPadding = `
padding: 0 3.3rem 0;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: none;
  width: 100vw;
  height: 100vh;
`
export const ProjectInfo = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-top: 7rem;
  text-transform: uppercase;
  ${globalPadding}
`
export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  ${globalPadding}
`
export const ProjectTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  text-transform: lowercase;
  margin-left: 3.3rem;
`
export const ProjectIndex = styled.p`
  font-size: 8rem;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px black;
`
export const LetterDecoration = styled.p`
  top: 0;
  left: 0;
  margin-left: 30%;
  margin-top: 8vh;
  position: absolute;
  line-height: 62rem;
  font-size: 60rem;
  font-weight: 900;
  color: rgba(38, 36, 35, 1);
`

export const ProjectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
`

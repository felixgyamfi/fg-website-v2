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
  margin-top: 8.5rem;
  text-transform: uppercase;
  ${globalPadding}

  @media screen and (min-width: 992px) {
    margin: 11rem 3rem 0;
  }
`
export const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33vh;
  position: relative;
  ${globalPadding}
`
export const ProjectTitle = styled.h2`
  position: absolute;
  bottom: 0;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  text-transform: lowercase;
  margin-left: 3.3rem;
`
export const ProjectIndex = styled.p`
  position: absolute;
  bottom: 2rem;
  margin-bottom: 0;
  font-size: 8rem;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px black;
`
export const LetterDecoration = styled.p`
  position: absolute;
  top: 0;
  margin-left: 30%;
  margin-top: 4vh;
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

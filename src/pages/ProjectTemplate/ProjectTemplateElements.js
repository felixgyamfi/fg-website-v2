import styled from "styled-components"

const globalPadding = `
padding: 0 3.3rem 0;
`
const galleryGridColumns = `
grid-template-columns: 10% 1fr 1fr 30%;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 40% 60%;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". . . .";
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 992px) {
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . .";
    ${galleryGridColumns}
    grid-template-rows: 15% 35% 35% 15%;
    gap: 0px 0px;
    width: 100vw;
    height: 100vh;
  }
`
export const ProjectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: max-content;

  @media screen and (min-width: 992px) {
    width: 100vw;
    height: 100vh;
    display: grid;
    @media screen and (min-width: 992px) {
      grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . .";
      ${galleryGridColumns}
      grid-template-rows: 15% 1fr 1fr 1fr 1fr 15%;
    }
  }
`
export const ProjectInfo = styled.h1`
  max-width: 80%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 8.5rem 3.3rem 0;

  @media screen and (min-width: 992px) {
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }
`
export const ProjectTitleWrap = styled.div`
  ${globalPadding}
  width: 75%;
  @media screen and (min-width: 992px) {
    grid-column: 3/4;
    grid-row: 6/7;
    padding: 0;
    text-align: right;
    margin-left: 3.3rem;
    position: relative;
  }
`

export const ProjectTitle = styled.h2`
  bottom: 0;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  text-transform: lowercase;

  @media screen and (min-width: 992px) {
    font-size: 3.6rem;
  }
`

export const ProjectIndex = styled.p`
  margin-top: 20vh;
  height: fit-content;
  width: fit-content;
  ${globalPadding}
  bottom: 2rem;
  margin-bottom: 0;
  font-size: 8rem;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px black;

  @media screen and (min-width: 992px) {
    grid-column: 1/3;
    grid-row: 1/3;
    font-size: 20rem;
  }
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

  @media screen and (min-width: 992px) {
    margin-left: auto;
    margin-right: 5%;
    grid-area: 2/4;
    z-index: 990;
  }
`
export const ProjectDesc = styled.section`
  display: none;
  letter-spacing: 0.1rem;
  line-height: auto;

  @media screen and (min-width: 992px) {
    display: inline-block;
    margin-left: auto;
    margin-right: 6rem;
    grid-column: 4/5;
    grid-row: 4/5;

    p {
      margin: 0;
      padding: 0;
    }
  }
`

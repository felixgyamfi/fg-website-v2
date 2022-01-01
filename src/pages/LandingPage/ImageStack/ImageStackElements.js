import styled from "styled-components"

export const Stack = styled.div`
  max-width: 75rem;
  display: grid;
  position: relative; // imperative for the overlapping to work
  grid-template-columns: repeat(12, 1fr);

  @media screen and (min-width: 992px) {
    max-width: unset;
    height: 100vh;
  }
`
export const StackItemTop = styled.div`
  grid-row: 1;
  grid-column: 4 / -1;
  z-index: 1; // tells the browser to make this image on top
`

export const StackItemBottom = styled.div`
  grid-column: 1 / span 6;
  padding-top: 80%; // slightly arbitrary, keeps proportion once resized
  grid-row: 1;
`

export const Container = styled.div`
  position: absolute;
  @media screen and (min-width: 992px) {
    margin-right: 10.7rem;
    margin-left: 25vw;
  }
`

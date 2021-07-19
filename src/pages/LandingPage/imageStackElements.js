import styled from "styled-components"

export const Stack = styled.div`
  display: grid;
  position: relative; // imperative for the overlapping to work
  grid-template-columns: repeat(12, 1fr);
`
export const StackItemTop = styled.div`
  grid-row: 1;
  grid-column: 4 / -1;
  z-index: 1; // tells the browser to make this image on top
`

export const StackItemBottom = styled.div`
  grid-column: 1 / span 8;
  padding-top: 20%; // slightly arbitrary, keeps proportion once resized
  grid-row: 1;
`

export const Container = styled.div``

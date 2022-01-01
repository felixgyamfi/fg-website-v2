import React from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
  display: none;
  color: unset;

  .open {
    background-color: coral;
  }

  @media screen and (min-width: 992px) {
    display: inline-block;
    cursor: pointer;
    border: none;
    margin: 1rem 0 0 0;
    padding: 0;
    background: none;
    padding: 0;

    p {
      font-size: 2.4rem;
      font-weight: 500;
      margin: auto 0;
      border-bottom: 2.5px solid currentColor;
    }
  }
`
export function UnfoldBtn() {
  function clickHandle() {
    console.log("unfold button clicked")
  }
  return (
    <StyledBtn onClick={clickHandle}>
      <p>unfold +</p>
    </StyledBtn>
  )
}

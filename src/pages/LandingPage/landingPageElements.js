import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  overflow: visible;
  width: 100vw;
  height: 100vh;
  top: 100rem;
  left: 200rem;
  background-color: rgba(223, 221, 217, 1);
  padding-top: 4rem;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding-top: 0;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  max-width: 35rem;
  margin: 4rem 3rem 0;
  height: max-content;

  @media screen and (min-width: 992px) {
    margin: 10rem 6rem 0;
  }
`
export const TitleText = styled.p`
  font-size: 3.6rem;
  line-height: 4.3rem;
`

export const ArrowButton = styled.div`
  width: fit-content;
  font-size: inherit;
`
export const ArrowButtons = styled.div`
  width: 15.5rem;
  height: 7rem;
  font-size: 3.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3.3rem;
  z-index: 100;

  .right {
    align-self: flex-end;
  }
  .left {
    align-self: flex-start;
  }

  @media screen and (min-width: 992px) {
    width: 20rem;
    height: 12rem;
    font-size: 5rem;
    margin-right: 31rem;
    margin-top: 55vw;
  }
`

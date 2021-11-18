import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  overflow: visible;
  width: 100vw;
  height: 100vh;
  top: 300rem;
  left: 300rem;
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

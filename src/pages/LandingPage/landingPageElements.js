import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  top: 1000px;
  left: 2000px;
  background-color: rgba(223, 221, 217, 1);
`
export const TitleWrapper = styled.div`
  max-width: 350px;
  padding: 50px 33px 0;
`

export const TitleHead = styled.h1`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  margin-bottom: 0;
`

export const TitleText = styled.p`
  font-size: 36px;
  line-height: 43px;
`

export const ArrowButton = styled.div`
  width: fit-content;
  font-size: 36px;
`
export const ArrowButtons = styled.div`
  width: 155px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 33px;

  .right {
    align-self: flex-end;
  }
  .left {
  }
`

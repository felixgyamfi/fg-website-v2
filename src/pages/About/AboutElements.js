import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  top: 400rem;
  left: 600rem;
`
export const Content = styled.div`
  padding-top: 9rem;
  margin-left: 3rem;
`
export const TitleText = styled.div`
  p {
    font-size: 2.4rem;
    font-weight: 400;
    width: 29.4rem;
    text-transform: lowercase;
    margin-bottom: 8rem;
  }
`
export const InfoSection = styled.section`
  margin-bottom: 4rem;
  width: 68%;
  font-size: 1.2rem;

  p {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-bottom: 0;
    line-height: 180%;
  }
`
export const ImgContainer = styled.div`
  width: 10rem;
  height: auto;
  margin: 6.5rem 0;
`
export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`
export const ExLink = styled.a`
  p {
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 2px solid currentColor;
    display: inline-block;
  }
`
export const HeroFont = styled.div`
  font-size: 20rem;
  font-weight: 900;
  transform: rotate(270deg);
  position: absolute;
  right: -22rem;
  top: 65%;
`

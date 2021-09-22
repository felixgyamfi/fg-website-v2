import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  top: 400rem;
  left: 600rem;
`
const Content = styled.div`
  padding-top: 9rem;
  margin-left: 3rem;
`

const TitleText = styled.div`
  p {
    font-size: 2.4rem;
    font-weight: 400;
    width: 29.4rem;
    text-transform: lowercase;
    margin-bottom: 8rem;
  }
`
const InfoSection = styled.section`
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
const ImgContainer = styled.div`
  width: 10rem;
  height: auto;
  margin: 6.5rem 0;
`
const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`
const ExLink = styled(Link)`
  p {
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 2px solid currentColor;
    display: inline-block;
  }
`
const HeroFont = styled.div`
  font-size: 20rem;
  font-weight: 900;
  transform: rotate(270deg);
  position: absolute;
  right: -22rem;
  top: 65%;
`

function About() {
  return (
    <div className="Test3">
      <Wrapper id="Test3">
        <Content>
          <TitleText>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpa. Ut wisi enim amet adminim.
            </p>
          </TitleText>
          <InfoSection>
            <h3>exhibition_</h3>
            <div>
              <p>2019 EXHIBITION 1</p>
              <p>2019 EXHIBITION 2</p>
              <p>2019 EXHIBITION 3</p>
              <p>2019 EXHIBITION 4</p>
              <p>2019 EXHIBITION 5</p>
            </div>
          </InfoSection>
          <InfoSection>
            <h3>experience_</h3>
            <div>
              <p>2018 freelancer - kiel, germany</p>
              <p>2016 XYZ COMPANY - ghana</p>
              <p>
                2014 MA DEGREE - university of fine arts & design - Münster,
                germany
              </p>
              <p>
                2012 BA DEGREE - muthesius university of fine arts & design -
                kIEL, GERMANY
              </p>
            </div>
          </InfoSection>
          <ImgContainer>
            <StaticImage src="../../assets/images/SPINNY.jpg" alt="Spinny" />
          </ImgContainer>
          <LinkWrap>
            <ExLink>
              <p>instagram ↗</p>
            </ExLink>
            <ExLink>
              <p>collaboration ↗</p>
            </ExLink>
          </LinkWrap>
          <HeroFont>about</HeroFont>
        </Content>
      </Wrapper>
    </div>
  )
}

export default About

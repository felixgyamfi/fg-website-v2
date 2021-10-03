import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Wrapper,
  Content,
  TitleText,
  InfoSection,
  ImgContainer,
  LinkWrap,
  ExLink,
  HeroFont,
} from "./AboutElements"

function About() {
  return (
    <div>
      <Wrapper id="aboutPage">
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
            <ExLink href="https://www.instagram.com/sometintolike/">
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

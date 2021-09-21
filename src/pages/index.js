import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

import Nav from "../components/Nav copy 2/Nav"

import LandingPage from "./LandingPage/LandingPage"
import ProjectTemplate from "./ProjectTemplate"
import TestProject3 from "./TestProject3"
import TestProject4 from "./TestProject4"
import TestProject5 from "./TestProject5"
import TestProject6 from "./TestProject6"

export const TitleHead = styled.h1`
  position: fixed;
  z-index: 998;
  font-size: 3.6rem;
  line-height: 4.3rem;
  font-weight: 500;
  margin-bottom: 0;
  padding: 2rem 3.3rem 0;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(38, 36, 35, 1); ;
`

const IndexPage = () => (
  <>
    <Nav />
    <Seo title="Felix Gyamfi" />
    <LandingPage>
      <Seo title="P1" />
    </LandingPage>
    <ProjectTemplate />
    <TestProject3 />
    <TestProject4 />
    <TestProject5 />
    <TestProject6 />
  </>
)

export default IndexPage

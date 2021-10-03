import * as React from "react"
import Seo from "../components/seo"
import Nav from "../components/Navigation/Nav"

import LandingPage from "./LandingPage/LandingPage"
import ProjectTemplate from "./ProjectTemplate"
import About from "./About"
import TestProject4 from "./TestProject4"
import TestProject5 from "./TestProject5"
import TestProject6 from "./TestProject6"

const IndexPage = () => (
  <>
    <Nav />
    <Seo title="Felix Gyamfi" />
    <LandingPage>
      <Seo title="P1" />
    </LandingPage>
    <ProjectTemplate />
    <About />
    <TestProject4 />
    <TestProject5 />
    <TestProject6 />
  </>
)

export default IndexPage

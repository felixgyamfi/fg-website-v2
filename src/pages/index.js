import * as React from "react"
import Seo from "../components/seo"

import LandingPage from "./LandingPage/LandingPage"
import ProjectTemplate from "./ProjectTemplate"
import Project1 from "./Projects/Project1"
import Project2 from "./Projects/Project2"
import Project3 from "./Projects/Project3"
import About from "./About"

const IndexPage = () => (
  <>
    <Seo title="Felix Gyamfi" />
    <LandingPage>
      <Seo title="Home" />
    </LandingPage>
    <ProjectTemplate />
    <Project1 />
    <Project2 />
    <Project3 />
    <About>
      <Seo title="About" />
    </About>
  </>
)

export default IndexPage

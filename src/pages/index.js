import * as React from "react"
import { useState } from "react"
import Seo from "../components/seo"

import LandingPage from "./LandingPage/LandingPage"
import Project1 from "./Projects/Project1"
import Project2 from "./Projects/Project2"
import Project3 from "./Projects/Project3"
import About from "./About"
import { ProjectContext } from "./Projects/ProjectContext"

function IndexPage() {
  const [pageData, setPageData] = useState({
    id: "P3",
    bgColor: "lightyellow",
    infoSubTitle: "default sub title",
    projectIndex: "00",
    projectTitle: "default title",
    projectDesc: ["description: this is a default description"],
  })

  return (
    <>
      <ProjectContext.Provider value={[pageData, setPageData]}>
        <Seo title="Felix Gyamfi" />
        <LandingPage>
          <Seo title="Home" />
        </LandingPage>
        <Project1 />
        <Project2 />
        <Project3 />
        <About>
          <Seo title="About" />
        </About>
      </ProjectContext.Provider>
    </>
  )
}

export default IndexPage

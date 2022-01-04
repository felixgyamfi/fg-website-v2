import React from "react"
import ProjectTemplate from "../../ProjectTemplate/ProjectTemplateContext"
import data from "../../pagesData"

const index = () => {
  return (
    <>
      <ProjectTemplate
        pVert={data[4].position.top}
        pHorz={data[4].position.left}
        letterDec={data[4].projectTitle.charAt(0).toUpperCase()}
      />
    </>
  )
}

export default index

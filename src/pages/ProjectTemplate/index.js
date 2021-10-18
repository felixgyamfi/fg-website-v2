import React from "react"
import ProjectTemplate from "./ProjectTemplate"
import data from "./projectTemplateData"

const index = () => {
  return (
    <div>
      <ProjectTemplate
        id={data[0].id}
        infoSubTitle={data[0].infoSubTitle}
        projectIndex={data[0].projectIndex}
        projectTitle={data[0].projectTitle}
        letterDec={data[0].projectTitle.charAt(0)}
        projectDesc={data[0].projectDesc}
      />
    </div>
  )
}

export default index

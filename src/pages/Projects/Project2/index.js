import React from "react"
import ProjectTemplate from "../../ProjectTemplate/ProjectTemplate"
import data from "../../pagesData"

const index = () => {
  return (
    <div>
      <ProjectTemplate
        id={data[2].id}
        pVert={data[2].position.top}
        pHorz={data[2].position.left}
        bgColor={data[2].bgColor}
        infoSubTitle={data[2].infoSubTitle}
        projectIndex={data[2].projectIndex}
        projectTitle={data[2].projectTitle}
        letterDec={data[2].projectTitle.charAt(0).toUpperCase()}
        projectDesc={data[2].projectDesc}
      />
    </div>
  )
}

export default index

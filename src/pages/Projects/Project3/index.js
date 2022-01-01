import React from "react"
import ProjectTemplate from "../../ProjectTemplate/ProjectTemplate"
import data from "../../pagesData"

const index = () => {
  return (
    <div>
      <ProjectTemplate
        id={data[3].id}
        pVert={data[3].position.top}
        pHorz={data[3].position.left}
        bgColor={data[3].bgColor}
        infoSubTitle={data[3].infoSubTitle}
        projectIndex={data[3].projectIndex}
        projectTitle={data[3].projectTitle}
        letterDec={data[3].projectTitle.charAt(0).toUpperCase()}
        projectDesc={data[3].projectDesc}
      />
    </div>
  )
}

export default index

import React from "react"
import ProjectTemplate from "../../ProjectTemplate/ProjectTemplate"
import data from "../../pagesData"

const index = () => {
  return (
    <>
      <div>
        <ProjectTemplate
          id={data[4].id}
          pVert={data[4].position.top}
          pHorz={data[4].position.left}
          bgColor={data[4].bgColor}
          infoSubTitle={data[4].infoSubTitle}
          projectIndex={data[4].projectIndex}
          projectTitle={data[4].projectTitle}
          letterDec={data[4].projectTitle.charAt(0).toUpperCase}
          projectDesc={data[4].projectDesc}
        />
      </div>
    </>
  )
}

export default index

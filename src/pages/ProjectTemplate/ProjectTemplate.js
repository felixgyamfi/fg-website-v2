import React from "react"
import Layout from "../../components/layout"
import {
  Wrapper,
  ProjectDataWrapper,
  ProjectInfo,
  ProjectData,
  ProjectIndex,
  ProjectTitle,
  LetterDecoration,
} from "./ProjectTemplateElements"
import { ImageGallery } from "./ProjectImageGallery"
import ScrollBox from "../../components/ScrollBox/ScrollBox"

function ProjectTemplate() {
  return (
    <Layout>
      <div className="Project1" id="P1">
        <Wrapper>
          <ProjectDataWrapper className="project-data">
            <ProjectInfo>Project Template</ProjectInfo>
            <ProjectData>
              <ProjectIndex>01</ProjectIndex>
              <ProjectTitle>Project title</ProjectTitle>
            </ProjectData>
          </ProjectDataWrapper>
          <ImageGallery className="image-gallery" />
          <ScrollBox />
        </Wrapper>
        <LetterDecoration>T</LetterDecoration>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

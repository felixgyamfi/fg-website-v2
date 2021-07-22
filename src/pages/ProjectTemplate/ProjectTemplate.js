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
      <div className="Project1">
        <Wrapper id="P1">
          <ImageGallery className="ImageGallery" />
          <ProjectDataWrapper className="ProjectData">
            <ProjectInfo>Project Template</ProjectInfo>
            <ProjectData>
              <ProjectIndex>01</ProjectIndex>
              <ProjectTitle>Project title</ProjectTitle>
            </ProjectData>
          </ProjectDataWrapper>
          <ScrollBox />
          <LetterDecoration>T</LetterDecoration>
        </Wrapper>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

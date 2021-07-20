import React from "react"
import Layout from "../../components/layout"
import {
  Wrapper,
  ProjectDataWrapper,
  ProjectInfo,
  ProjectData,
  ProjectIndex,
  ProjectTitle,
  ScrollBoxWrapper,
  ScrollBox,
  Arrow,
  LetterDecoration,
} from "./ProjectTemplateElements"
import { ImageGallery } from "./ProjectImageGallery"

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
          <ScrollBoxWrapper className="ScrollBox">
            <ScrollBox>
              <Arrow className="left">←</Arrow>
              <p>scroll</p>
              <Arrow className="right">→</Arrow>
            </ScrollBox>
          </ScrollBoxWrapper>
          <LetterDecoration>T</LetterDecoration>
        </Wrapper>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

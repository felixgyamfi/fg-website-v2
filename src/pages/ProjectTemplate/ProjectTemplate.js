import React from "react"
import Layout from "../../components/layout"
import styled from "styled-components"
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

const ProjectImageGalleryWrapper = styled.div`
  z-index: 1;
`

const ProjectImageGallery = styled.section`
  height: 65vh;
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(175, 184, 118, 0.9); ;
`

const ProjectImageWrapper = styled.div``

function ImageGallery() {
  return (
    <ProjectImageGalleryWrapper>
      <ProjectImageGallery>
        <ProjectImageWrapper />
      </ProjectImageGallery>
    </ProjectImageGalleryWrapper>
  )
}

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

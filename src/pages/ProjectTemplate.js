import React from "react"
import Layout from "../components/layout"
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

function ProjectTemplate() {
  return (
    <Layout>
      <div className="Project1">
        <Wrapper id="P1">
          <ProjectDataWrapper>
            <ProjectInfo>Project Template</ProjectInfo>
            <ProjectData>
              <ProjectIndex>01</ProjectIndex>
              <ProjectTitle>Project title</ProjectTitle>
            </ProjectData>
          </ProjectDataWrapper>
          <ScrollBoxWrapper>
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

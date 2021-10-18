import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import {
  Wrapper,
  ProjectDataWrapper,
  ProjectInfo,
  ProjectTitleWrap,
  ProjectIndex,
  ProjectTitle,
  LetterDecoration,
  ProjectDesc,
} from "./ProjectTemplateElements"
import ImageGallery from "./ProjectImageGalleryPrvw"
import ScrollBox from "../../components/ScrollBox/ScrollBox"

const StyledBtn = styled.button`
  display: none;

  .open {
    background-color: coral;
  }

  @media screen and (min-width: 992px) {
    display: inline-block;
    cursor: pointer;
    border: none;
    margin: 1rem 0 0 0;
    padding: 0;
    background: none;
    padding: 0;

    p {
      font-size: 2.4rem;
      font-weight: 500;
      margin: auto 0;
      border-bottom: 2.5px solid currentColor;
    }
  }
`

function UnfoldBtn() {
  function clickHandle() {
    console.log("unfold button clicked")
  }
  return (
    <StyledBtn onClick={clickHandle}>
      <p>unfold +</p>
    </StyledBtn>
  )
}

function ProjectTemplate({
  id,
  infoSubTitle,
  projectIndex,
  projectTitle,
  letterDec,
  projectDesc,
}) {
  return (
    <Layout>
      <Wrapper className="Project1" id={id}>
        <ProjectDataWrapper className="project-data">
          <ProjectInfo>{infoSubTitle}</ProjectInfo>
          <ProjectIndex>{projectIndex}</ProjectIndex>
          <ProjectTitleWrap className="project-title">
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <UnfoldBtn className="unfold"></UnfoldBtn>
          </ProjectTitleWrap>
        </ProjectDataWrapper>
        <ImageGallery className="image-gallery"></ImageGallery>
        <ScrollBox />
        <LetterDecoration>{letterDec}</LetterDecoration>
        <ProjectDesc className="description">
          {projectDesc.map(entry => (
            <p>{entry}</p>
          ))}
        </ProjectDesc>
      </Wrapper>
    </Layout>
  )
}

export default ProjectTemplate

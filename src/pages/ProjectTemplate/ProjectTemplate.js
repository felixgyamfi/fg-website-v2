import React from "react"
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
import { UnfoldBtn } from "./UnfoldBtn"

function ProjectTemplate({
  id,
  infoSubTitle,
  projectIndex,
  projectTitle,
  letterDec,
  projectDesc,
  pVert,
  pHorz,
  bgColor,
}) {

  console.log("log projectDesc", projectDesc);
  
  const renderDescription = (projectDesc) => {
    if((projectDesc ?? null) === null)
      return null;
    return projectDesc.map(entry => (
      <p>{entry}</p>
    ));
  };
  
  return (
    <>
      <Layout>
        <Wrapper
          className="project-page"
          style={{
            position: `relative`,
            top: `${pVert}`,
            left: `${pHorz}`,
            backgroundColor: `${bgColor}`,
          }}
          id={id}
        >
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
             {renderDescription(projectDesc)}
          </ProjectDesc>
        </Wrapper>
      </Layout>
    </>
  )
}

export default ProjectTemplate

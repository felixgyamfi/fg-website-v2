import React, { useContext } from "react"
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
import { ProjectContext } from "../Projects/ProjectContext"
import { UnfoldBtn } from "./UnfoldBtn"

function ProjectTemplate({}) {
  const [pageData] = useContext(ProjectContext)

  const renderDescription = projectDesc => {
    if ((projectDesc ?? null) === null) return null
    return projectDesc.map(entry => <p>{entry}</p>)
  }

  return (
    <>
      <Layout>
        <Wrapper
          className="project-page"
          style={{
            position: `relative`,
            top: `${pageData.pVert}`,
            left: `${pageData.pHorz}`,
            backgroundColor: `${pageData.bgColor}`,
          }}
          id={pageData.id}
        >
          <ProjectDataWrapper className="project-data">
            <ProjectInfo>{pageData.infoSubTitle}</ProjectInfo>
            <ProjectIndex>{pageData.projectIndex}</ProjectIndex>
            <ProjectTitleWrap className="project-title">
              <ProjectTitle>{pageData.projectTitle}</ProjectTitle>
              <UnfoldBtn className="unfold" />
            </ProjectTitleWrap>
          </ProjectDataWrapper>
          <ImageGallery className="image-gallery"></ImageGallery>
          <ScrollBox />
          <LetterDecoration>{pageData.letterDec}</LetterDecoration>
          <ProjectDesc className="description">
            {renderDescription(pageData.projectDesc)}
          </ProjectDesc>
        </Wrapper>
      </Layout>
    </>
  )
}

export default ProjectTemplate

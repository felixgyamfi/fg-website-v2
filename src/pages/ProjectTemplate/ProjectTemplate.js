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
import ImageGallery from "./ProjectImageGalleryPrvw"
import ScrollBox from "../../components/ScrollBox/ScrollBox"

function ProjectTemplate({
  id,
  infoSubTitle,
  projectIndex,
  projectTitle,
  letterDec,
}) {
  return (
    <Layout>
      <div className="Project1" id={id}>
        <Wrapper>
          <ProjectDataWrapper className="project-data">
            <ProjectInfo>{infoSubTitle}</ProjectInfo>
            <ProjectData>
              <ProjectIndex>{projectIndex}</ProjectIndex>
              <ProjectTitle>{projectTitle}</ProjectTitle>
            </ProjectData>
          </ProjectDataWrapper>
          <ImageGallery className="image-gallery"></ImageGallery>
          <ScrollBox />
        </Wrapper>
        <LetterDecoration>{letterDec}</LetterDecoration>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

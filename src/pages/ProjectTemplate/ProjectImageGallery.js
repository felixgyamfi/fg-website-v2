import React from "react"
import styled from "styled-components"

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
export function ImageGallery() {
  return (
    <ProjectImageGalleryWrapper>
      <ProjectImageGallery>
        <ProjectImageWrapper />
      </ProjectImageGallery>
    </ProjectImageGalleryWrapper>
  )
}

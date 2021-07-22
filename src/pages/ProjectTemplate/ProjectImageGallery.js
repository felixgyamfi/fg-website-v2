import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ProjectImageGalleryWrapper = styled.div`
  z-index: 1;
  height: 60vh;
  position: absolute;
  left: 0;
  bottom: 0;
`
const ProjectImageGallery = styled.ul`
  margin: 0;
  padding: 0;
  float: left;
  margin-right: -999em;
  white-space: nowrap;
  list-style: none;
  width: auto;
  height: 100%;
  background-color: rgba(175, 184, 118, 0.9); ;
`
const ProjectImageWrapper = styled.li`
  text-align: center;
  float: left;
  display: block;
`

export function ImageGallery() {
  return (
    <ProjectImageGalleryWrapper>
      <ProjectImageGallery>
        <ProjectImageWrapper>
          <StaticImage
            src="../../assets/images/Simi_1-2.jpg"
            alt=""
            style={{
              height: `auto`,
              width: `80vw`,
              objectFit: `scale-down`,
            }}
          />
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <StaticImage
            src="../../assets/images/feuer_1.jpg"
            alt=""
            src="../../assets/images/Simi_1-2.jpg"
            alt=""
            style={{
              height: `auto`,
              width: `80vw`,
              objectFit: `scale-down`,
            }}
          />
        </ProjectImageWrapper>
      </ProjectImageGallery>
    </ProjectImageGalleryWrapper>
  )
}

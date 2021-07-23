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
  background-color: rgba(175, 184, 118, 0.9);
`
const ProjectImageWrapper = styled.li`
  text-align: center;
  float: left;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );

  .gallery-img {
    object-fit: contain;
  }
  .gallery-img-wrap {
    max-width: 80vw;
    max-height: 60vh;
    width: auto;
  }
`

export function ImageGallery() {
  return (
    <ProjectImageGalleryWrapper>
      <ProjectImageGallery>
        <ProjectImageWrapper>
          <StaticImage
            src="../../assets/images/2Y4A4683.jpg"
            imgClassName="gallery-img"
            className="gallery-img-wrap"
          />
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <StaticImage
            src="../../assets/images/2Y4A5218.jpg"
            alt=""
            imgClassName="gallery-img"
            className="gallery-img-wrap"
          />
        </ProjectImageWrapper>
      </ProjectImageGallery>
    </ProjectImageGalleryWrapper>
  )
}

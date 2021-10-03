import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ProjectImageGalleryWrapper = styled.div`
  z-index: 1;
  height: 60vh;
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 992px) {
    height: 85vh;
  }
`
const ProjectImageGallery = styled.div`
  position: relative;
  white-space: nowrap;
  list-style: none;
  width: 100%;
  height: 100%;
  overflow-y: visible;
  background-color: rgba(175, 184, 118, 0.9);

  @media screen and (min-width: 992px) {
    width: 60%;
    margin-left: 15%;
  }
`
const ProjectImageWrapper = styled.div`
  display: inline-block;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );

  @media screen and (min-width: 992px) {
    height: inherit;
    width: inherit;
  }

  .gallery-img {
    max-height: 60vh;
    max-width: 80vw;

    @media screen and (min-width: 992px) {
      max-height: max-content;
      max-width: unset;
      height: inherit;
      width: inherit;
    }
  }
  .gallery-img-wrap {
    max-height: 60vh;
    max-width: 80vw;

    @media screen and (min-width: 992px) {
      max-height: 100%;
      max-width: unset;
    }
  }
`
export default function ImageGallery() {
  return (
    <ProjectImageGalleryWrapper>
      <ProjectImageGallery>
        <ProjectImageWrapper className="first-img">
          <StaticImage
            src="../../assets/images/2Y4A4683.jpg"
            imgClassName="gallery-img"
            className="gallery-img-wrap"
            imgStyle={{ objectFit: "contain" }}
          />
        </ProjectImageWrapper>
        <ProjectImageWrapper className="second-img">
          <StaticImage
            src="../../assets/images/2Y4A5218.jpg"
            alt=""
            imgClassName="gallery-img"
            className="gallery-img-wrap"
            imgStyle={{ objectFit: "contain" }}
          />
        </ProjectImageWrapper>
      </ProjectImageGallery>
    </ProjectImageGalleryWrapper>
  )
}

import React from "react"
import styled from "styled-components"

const GalleryWrap = styled.div`
  z-index: 1;
  grid-row: 2/3;
  grid-column: span 4;

  @media screen and (min-width: 992px) {
    grid-column: 2/4;
    grid-row: 2/4;
  }
`

const ImgWrap = styled.div`
  display: flex;
  overflow-x: auto; //scroll gallery without window

  &::-webkit-scrollbar {
    width: 0;
  }

  .item {
    min-width: 70%;
    line-height: 100%;

    &:nth-child(even) {
      img {
        min-width: 100%;
      }
    }
  }

  @media screen and (min-width: 992px) {
    height: -webkit-fill-available;

    .item {
      &:nth-child(odd) {
        min-width: fit-content;
      }
      &:nth-child(even) {
        min-height: 100%;

        height: fit-content;
        margin-top: 5%;
        min-width: auto;
      }
    }

    &:nth-child(odd) {
      img {
        height: -webkit-fill-available;
      }
    }
  }
`

export default function ImageGallery(firstImgWidth) {
  return (
    <GalleryWrap className="gallery-wrap">
      <ImgWrap>
        <div className="item">
          <img
            src="https://picsum.photos/600/900"
            alt="gallery-cover-img"
          ></img>
        </div>
        <div className="item">
          <img
            src="https://picsum.photos/900/600"
            alt="gallery-cover-img"
          ></img>
        </div>
      </ImgWrap>
    </GalleryWrap>
  )
}

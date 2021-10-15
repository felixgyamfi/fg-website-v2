import React from "react"
import styled from "styled-components"

const GalleryWrap = styled.div`
  z-index: 1;
  grid-row: 2/4;
  grid-column: span 4;
  border: 1px solid greenyellow;
`

const ImgWrap = styled.div`
  display: flex;
  border: 1px solid lightblue;
  max-height: 40rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  .item {
    min-width: 400px;
    line-height: 400px;
    text-align: center;
    background-color: burlywood;
    margin-right: 5px;

    img {
      width: 400px;
      height: 400px;
    }
  }
`

export default function ImageGallery(firstImgWidth) {
  return (
    <GalleryWrap className="gallery-wrap">
      <ImgWrap>
        <div className="item">
          <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        </div>
        <div className="item">
          <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        </div>
        <div className="item">
          <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        </div>
        <div className="item">
          <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        </div>
      </ImgWrap>
    </GalleryWrap>
  )
}

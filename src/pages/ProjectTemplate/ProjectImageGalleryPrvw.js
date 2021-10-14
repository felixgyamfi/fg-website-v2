import React from "react"
import styled from "styled-components"

const GalleryWrap = styled.div`
  background-color: blueviolet;
  bottom: 0;
  position: fixed;
  z-index: 1;
`

const ImgWrap = styled.div`
  img {
  }
`

export default function ImageGallery(firstImgWidth) {
  return (
    <GalleryWrap className="gallery-wrap">
      <ImgWrap>
        <div className="item">box 1</div>
        <div className="item">box 2</div>
        <div className="item">box 3</div>
        <div className="item">box 4</div>
        <div className="item">box 5</div>
        {/* <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        <img src="https://picsum.photos/600" alt="gallery-cover-img"></img>
        <img src="https://picsum.photos/600" alt="gallery-cover-img"></img> */}
      </ImgWrap>
    </GalleryWrap>
  )
}

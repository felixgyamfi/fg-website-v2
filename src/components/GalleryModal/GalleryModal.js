import React from "react"
import styled from "styled-components"

const Modal = styled.div``

function GalleryModal({ showModal, toggleShowModal }) {
  return <div>{showModal ? <Modal>Modal</Modal> : null}</div>
}

export default GalleryModal

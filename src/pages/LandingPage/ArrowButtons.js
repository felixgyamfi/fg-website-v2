import React from "react"
import { ArrowButton, ArrowButtons } from "./ArrowButtonsElements"

export function ArrowBtns() {
  return (
    <ArrowButtons>
      <ArrowButton className="right" pageHash={"#P1"} pageTitle={"←"} />
      <ArrowButton className="left" pageHash={"#P4"} pageTitle={"→"} />
    </ArrowButtons>
  )
}

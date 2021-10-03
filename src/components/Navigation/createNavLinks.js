import React from "react"
import { NavEntry } from "./NavEntry"
import attributes from "./NavLinksData"

export const createNavLinks = () => {
  const a = attributes.map((entry, index) => (
    <NavEntry key={index} pageHash={entry.hash} pageTitle={entry.route} />
  ))
  return a
}

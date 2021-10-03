import React from "react"
import { NavItem } from "./NavItem"
import attributes from "./NavItemsData"

export const createNavItems = () => {
  const a = attributes.map((entry, index) => (
    <NavItem key={index} pageHash={entry.hash} pageTitle={entry.route} />
  ))
  return a
}

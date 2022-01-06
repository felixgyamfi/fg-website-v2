import { createContext } from "react"

export const ProjectContext = createContext({
  id: "",
  position: {
    top: "",
    left: "",
  },
  bgColor: null,
  infoSubTitle: "",
  projectIndex: "",
  projectTitle: "",
  projectDesc: [],
})

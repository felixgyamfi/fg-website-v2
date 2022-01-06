import { pages } from "../../pages/pagesData"

const attributes = [
  {
    index: 0,
    route: "Home",
    hash: "#landingPage",
  },
  {
    index: 1,
    route: "About",
    hash: "#aboutPage",
  },
  {
    index: 2,
    route: `${pages[2].projectTitle}`,
    hash: `#${pages[2].id}`,
  },
  {
    index: 2,
    route: `${pages[3].projectTitle}`,
    hash: `#${pages[3].id}`,
  },
  {
    index: 2,
    route: `${pages[4].projectTitle}`,
    hash: `#${pages[4].id}`,
  },
]

export default attributes

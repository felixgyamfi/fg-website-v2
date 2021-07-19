import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Nav from "../components/Nav/Nav"

import TestProject1 from "./LandingPage/LandingPage"
import TestProject2 from "./TestProject2"
import TestProject3 from "./TestProject3"
import TestProject4 from "./TestProject4"
import TestProject5 from "./TestProject5"
import TestProject6 from "./TestProject6"

const IndexPage = () => (
  <Layout>
    <Nav />
    <Seo title="Home" />
    <TestProject1 />
    <TestProject2 />
    <TestProject3 />
    <TestProject4 />
    <TestProject5 />
    <TestProject6 />
  </Layout>
)

export default IndexPage

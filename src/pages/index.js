import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import TestProject1 from "./TestProject1"
import TestProject2 from "./TestProject2"
import TestProject3 from "./TestProject3"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>INDEX</h1>
    <TestProject1 />
    <TestProject2 />
    <TestProject3 />
  </Layout>
)

export default IndexPage

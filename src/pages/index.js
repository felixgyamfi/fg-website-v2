import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import TestProject1 from "./TestProject1"
import TestProject2 from "./TestProject2"
import TestProject3 from "./TestProject3"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <TestProject1 />
    <TestProject2 />
    <TestProject3 />
  </Layout>
)

export default IndexPage

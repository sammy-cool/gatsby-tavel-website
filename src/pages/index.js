import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CreateSection from "../components/Section"
import Image from "../components/image"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <CreateSection />
      <Image />
    </Layout>
  )
}

export default IndexPage

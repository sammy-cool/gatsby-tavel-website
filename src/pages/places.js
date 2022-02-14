import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const Images = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <Image />
  </Layout>
)

export default Images

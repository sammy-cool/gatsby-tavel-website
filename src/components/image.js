import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import { GatsbyImage } from "gatsby-plugin-image"
import "./image.css"

function Image() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image-container">
      <h1>...to be adventurous!</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </div>
    </div>
  )
}
export default Image

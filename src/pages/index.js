import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div
          style={{ fontWeight: "bold", fontSize: "3rem", lineHeight: "3rem" }}
        >
          VOLKAN UNSAL
        </div>
        <p style={{ fontSize: "2rem" }}>Full Stack Developer</p>
      </Layout>
    </>
  )
}

export default IndexPage

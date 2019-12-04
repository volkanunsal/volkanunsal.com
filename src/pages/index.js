import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ fontWeight: "bold", fontSize: "3rem", lineHeight: "3rem" }}>
      VOLKAN UNSAL
    </div>
    <p style={{ fontSize: "2rem" }}>Full-stack Developer</p>
    <Nav />
  </Layout>
)
  
export default IndexPage

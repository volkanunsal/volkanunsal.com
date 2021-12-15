import React, { useEffect } from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import art from "../lib/art"

const IndexPage = () => {
  useEffect(() => {
    art()
  }, [])
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
        <Nav />
      </Layout>
      <div className="art-container" style={{ marginTop: "-3rem" }} />
    </>
  )
}

export default IndexPage

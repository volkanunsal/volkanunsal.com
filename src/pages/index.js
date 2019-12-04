import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ fontWeight: "bold", fontSize: "3rem", lineHeight: "3rem" }}>
      VOLKAN UNSAL
    </div>
    <p style={{ fontSize: "2rem" }}>Full-stack Developer</p>

    <div className="d-flex">
      <Link className="mr-3" to="/blog">
        Blog
      </Link>
      <Link className="mr-3" to="/resumee">
        Resumee
      </Link>
      <a
        className="mr-3"
        href="https://github.com/volkanunsal"
        target="__blank"
      >
        Github
      </a>
    </div>
  </Layout>
)

export default IndexPage

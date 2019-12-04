import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <Link to="/">
        <i className="fa fa-caret-left" /> Home
      </Link>
    </Layout>
  )
}

export default Blog

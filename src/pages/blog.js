import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Nav showHome />
      <h1>Blog</h1>
    </Layout>
  )
}

export default Blog

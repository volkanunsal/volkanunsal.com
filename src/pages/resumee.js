import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Resumee" />
    <h1>Resumee</h1>
    <Link to="/">
      <i className="fa fa-caret-left" /> Home
    </Link>
  </Layout>
)

export default SecondPage

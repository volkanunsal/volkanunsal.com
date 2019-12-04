import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Nav showHome />
      <h1>About</h1>
      <p>
        I am a US-based software developer with a long track record of building
        software products and user experiences.
      </p>
      <p>
        My product development skills are most helpful to early stage startups
        that haven't reached product-market fit stage, but I've also worked with
        medium-size startups to improve their products and processes.
      </p>

      <hr className="hr mt-5 mb-5" />
      <div className="mt-5">
        <h3>Client Testimonials</h3>
        <blockquote className="blockquote border-left pl-2">
          Volkan is an expert web developer but also very practical about
          building just what an early-stage startup needs. Highly recommended!
          <footer className="blockquote-footer">
            <a href="https://www.linkedin.com/in/tringastyler" target="__blank">
              Tyler Tringas
            </a>
            <cite title="Source Title">, Founder at SolarList</cite>
          </footer>
        </blockquote>
      </div>
      <hr className="hr mt-5 mb-5" />

      <div className="text-center">
        <a
          className="btn btn-default btn-outline-info rounded-0"
          href="mailto:spocksplanet@gmail.com?subject=re: working together"
          target="__blank"
        >
          Contact Me
        </a>
      </div>
    </Layout>
  )
}

export default About

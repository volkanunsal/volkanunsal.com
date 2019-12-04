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
        I am a New York-based software developer with a track record of building
        great mobile and web software.{" "}
      </p>
      <p>
        My process brings a deep understanding of product development, lean
        methodology and human-centered software design techniques to help my
        clients solve challenging business problems.
      </p>
      <a
        className="btn btn-default btn-outline-info rounded-0"
        href="mailto:spocksplanet@gmail.com?subject=re: working together"
      >
        Contact Me
      </a>
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
    </Layout>
  )
}

export default About

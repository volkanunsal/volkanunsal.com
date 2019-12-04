import React from "react"
import { Link } from "gatsby"

export default ({ showHome }) => {
  return (
    <div className="d-flex mb-4">
      <div className="d-flex">
        {showHome && (
          <Link to="/" className="mr-3 border-right pr-3">
            <i className="fa fa-caret-left" /> Home
          </Link>
        )}

        <Link className="mr-3" to="/about">
          About
        </Link>
        {false && (
          <Link className="mr-3" to="/blog">
            Blog
          </Link>
        )}
        {false && (
          <Link className="mr-3" to="/resumee">
            Resumee
          </Link>
        )}
      </div>
      <div className="d-flex align-self-end">
        <a
          className="mr-3"
          href="https://github.com/volkanunsal"
          target="__blank"
        >
          Github{" "}
        </a>
        <a
          className="mr-3"
          href="https://www.linkedin.com/in/volkanunsal"
          target="__blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}

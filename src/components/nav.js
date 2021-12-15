import { Link } from "gatsby"
import React from "react"

export default ({ showHome }) => {
  return (
    <div className="d-flex mb-4">
      <div className="d-flex">
        {showHome && (
          <Link to="/" className="mr-3">
            <i className="fa fa-caret-left" /> Home
          </Link>
        )}
      </div>
      <div className="d-flex  border-left pl-3">
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
        <a href="mailto:spocksplanet@gmail.com?subject=hello" target="__blank">
          Contact
        </a>
      </div>
    </div>
  )
}

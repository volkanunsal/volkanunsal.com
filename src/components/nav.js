import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import { globalHistory as history } from "@reach/router"

export default ({ showHome }) => {
  const isPage = v => history.location.pathname === v
  return (
    <div className="d-flex mb-4">
      <div className="d-flex">
        {showHome && (
          <Link to="/" className="mr-3">
            <i className="fa fa-caret-left" /> Home
          </Link>
        )}

        <Link
          className={cx("mr-3", { "text-dark": isPage("/about") })}
          to="/about"
        >
          About
        </Link>
        {false && (
          <Link
            className={cx("mr-3", { "text-dark": isPage("/blog") })}
            to="/blog"
          >
            Blog
          </Link>
        )}
        {false && (
          <Link
            className={cx("mr-3", { "text-dark": isPage("/resumee") })}
            to="/resumee"
          >
            Resumee
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

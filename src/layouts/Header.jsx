import React from "react";
import { Link } from "gatsby"

const PAGES = ["portfolio", "about", "contact"];

function _renderLink(currentUrl, page) {
  const pageUrl = `/${page}`;
  let className = "nav__item";
  if (currentUrl === pageUrl) className += "--current";
  return (
    <li key={pageUrl} className={className}>
      <Link to={pageUrl}>
        {page}
      </Link>
    </li>
  );
}

export default function Header({ data, location }) {
  return (
    <header className="site-header">
      <div className="header-wrapper">
        <h1>
          <Link className="site-title" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav className="site-nav">
          <ul className="nav">
            {PAGES.map(_renderLink.bind(null, location.pathname))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

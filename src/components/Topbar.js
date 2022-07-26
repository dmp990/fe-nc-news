import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav>
      <Link className="top-nav-link" to="/">
        Home
      </Link>
      <Link className="top-nav-link" to="/articles">
        Articles
      </Link>
    </nav>
  );
}

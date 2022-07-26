import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      <Link className="top-nav-link" to="/">
        Home
      </Link>
      <Link className="top-nav-link" to="/topics">
        Articles
      </Link>
    </div>
  );
}

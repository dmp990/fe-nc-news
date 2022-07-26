import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { activeUsernameContext } from "../contexts/activeUsernameContext";

export default function Topbar() {
  const { activeUsername } = useContext(activeUsernameContext);
  return (
    <div>
      <Link className="top-nav-link" to="/">
        Home
      </Link>
      <Link className="top-nav-link" to="/topics">
        Topics
      </Link>
    </div>
  );
}

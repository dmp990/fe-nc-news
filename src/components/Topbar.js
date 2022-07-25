import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { activeUsernameContext } from "../contexts/activeUsernameContext";

export default function Topbar() {
  const { activeUsername } = useContext(activeUsernameContext);
  return (
    <div>
      <Link to="/">Home</Link>
      Logged in as: {activeUsername}
    </div>
  );
}

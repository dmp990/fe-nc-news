import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { activeUsernameContext } from "../contexts/activeUsernameContext";

export default function Login({ users }) {
  const { activeUsername, setActiveUsername } = useContext(
    activeUsernameContext
  );

  const [selectedUsername, setSelectedUsername] = useState(
    "--select an option--"
  );
  const [canSubmit, setCanSubmit] = useState(false);

  const navigate = useNavigate();
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setActiveUsername(selectedUsername);
    navigate("/articles");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <label>
          Username:{" "}
          <select
            onChange={(e) => {
              e.target.value === "--select an option--"
                ? setCanSubmit(false)
                : setCanSubmit(true);

              setSelectedUsername(() => e.target.value);
            }}
          >
            <option>--select an option--</option>
            {users.map((user) => (
              <option key={user}>{user}</option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!canSubmit}>
          Log in
        </button>
        {!canSubmit ? (
          <p className="form-error">Please select a user to log in</p>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopicsForm({ topics }) {
  const [selectedTopic, setSelectedTopic] = useState();

  const navigate = useNavigate();
  const handleFormSubmission = (e) => {
    e.preventDefault();
    navigate(`/articles/topics/${selectedTopic}`);
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <label>
          Topic:{" "}
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(() => e.target.value);
            }}
          >
            <option>all</option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={selectedTopic === "all" || selectedTopic === undefined}
        >
          Apply Filter
        </button>
      </form>
    </section>
  );
}
